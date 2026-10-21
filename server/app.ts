import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDb, db } from './db/schema.js';
import { generateChatResponse } from './services/ai/aiProvider.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Ensure database tables exist on each request
app.use(async (_req, _res, next) => {
    try {
        await initDb();
        next();
    } catch (err) {
        console.error("Database initialization error:", err);
        next(err);
    }
});

const router = express.Router();

// Basic chat completion endpoint that proxies to the AI provider
router.post('/chat', async (req, res) => {
    try {
        const { messages, stream } = req.body;
        
        if (stream) {
            const response = await generateChatResponse(messages, true);
            res.setHeader('Content-Type', 'text/event-stream');
            res.setHeader('Cache-Control', 'no-cache');
            res.setHeader('Connection', 'keep-alive');
            
            // @ts-ignore
            const reader = response.body.getReader();
            const decoder = new TextDecoder("utf-8");

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                const chunk = decoder.decode(value);
                res.write(chunk);
            }
            res.end();
        } else {
            const response = await generateChatResponse(messages, false);
            res.json(response);
        }
    } catch (error: any) {
        console.error("Chat API Error:", error);
        res.status(500).json({ error: 'AI Service Unavailable' });
    }
});

// RSVP Save Endpoint
router.post('/rsvp', async (req, res) => {
    try {
        const { state } = req.body;
        if (!state || !state.guestName) {
            return res.status(400).json({ error: 'Missing guestName' });
        }

        const guestInfo = await db.execute({
            sql: 'INSERT INTO guests (name, phone, email) VALUES (?, ?, ?)',
            args: [state.guestName, state.phone || null, state.email || null]
        });
        const guestId = Number(guestInfo.lastInsertRowid);

        await db.execute({
            sql: `
                INSERT INTO rsvps (guest_id, status, guest_count, gift_preference, message)
                VALUES (?, ?, ?, ?, ?)
            `,
            args: [
                guestId,
                state.attending === true ? 'attending' : (state.attending === false ? 'not_attending' : 'pending'),
                state.guestCount || 1,
                state.giftPreference || null,
                state.messageForCouple || null
            ]
        });

        if (state.memory && state.saveMemoryConsent) {
            await db.execute({
                sql: `
                    INSERT INTO guest_memories (guest_id, relationship, memory)
                    VALUES (?, ?, ?)
                `,
                args: [guestId, state.relationship || 'Guest', state.memory]
            });
        }

        res.json({ success: true, guestId });
    } catch (error: any) {
        console.error("RSVP Save Error:", error);
        res.status(500).json({ error: 'Failed to save RSVP' });
    }
});

// Admin Endpoint to fetch all guest data
router.get('/admin/guests', async (req, res) => {
    try {
        const result = await db.execute(`
            SELECT 
                g.id, g.name, g.phone, g.email,
                r.status, r.guest_count, r.gift_preference, r.message,
                m.memory, m.relationship
            FROM guests g
            LEFT JOIN rsvps r ON g.id = r.guest_id
            LEFT JOIN guest_memories m ON g.id = m.guest_id
            ORDER BY g.created_at DESC
        `);
        
        res.json(result.rows);
    } catch (error: any) {
        console.error("Admin Fetch Error:", error);
        res.status(500).json({ error: 'Failed to fetch guests' });
    }
});

// Endpoint to fetch guest names for the marquee
router.get('/blessings', async (req, res) => {
    try {
        const result = await db.execute(`
            SELECT DISTINCT name 
            FROM guests 
            WHERE name IS NOT NULL AND trim(name) != '' AND name != '[UserName]'
            ORDER BY id DESC
        `);
        const names = result.rows.map(row => String(row.name));
        res.json(names);
    } catch (error: any) {
        console.error("Blessings Fetch Error:", error);
        res.status(500).json({ error: 'Failed to fetch blessings' });
    }
});

// Mount router on both /api and / to handle direct calls or rewritten paths
app.use('/api', router);
app.use('/', router);

export default app;
