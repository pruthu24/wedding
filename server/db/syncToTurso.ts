import { createClient } from '@libsql/client';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const localDbPath = path.resolve(__dirname, 'wedding.sqlite');

async function sync() {
    const tursoUrl = process.env.TURSO_DATABASE_URL;
    const tursoToken = process.env.TURSO_AUTH_TOKEN;

    if (!tursoUrl || tursoUrl.startsWith('file:')) {
        console.error('Error: Please set TURSO_DATABASE_URL and TURSO_AUTH_TOKEN in your .env file before running sync.');
        process.exit(1);
    }

    console.log('Connecting to local SQLite database...');
    const localDb = createClient({ url: `file:${localDbPath}` });

    console.log(`Connecting to Turso: ${tursoUrl}...`);
    const tursoDb = createClient({ url: tursoUrl, authToken: tursoToken });

    // Initialize remote schema
    console.log('Ensuring tables exist on Turso...');
    await tursoDb.batch([
        `CREATE TABLE IF NOT EXISTS guests (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          phone TEXT,
          email TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );`,
        `CREATE TABLE IF NOT EXISTS rsvps (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          guest_id INTEGER NOT NULL,
          status TEXT CHECK(status IN ('attending', 'not_attending', 'pending')) NOT NULL,
          guest_count INTEGER DEFAULT 1,
          wedding_attendance BOOLEAN DEFAULT 0,
          reception_attendance BOOLEAN DEFAULT 0,
          dietary_preference TEXT,
          accommodation_required BOOLEAN DEFAULT 0,
          travel_assistance BOOLEAN DEFAULT 0,
          gift_preference TEXT,
          message TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (guest_id) REFERENCES guests(id) ON DELETE CASCADE
        );`,
        `CREATE TABLE IF NOT EXISTS guest_memories (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          guest_id INTEGER NOT NULL,
          relationship TEXT,
          memory TEXT NOT NULL,
          tags TEXT,
          visibility TEXT CHECK(visibility IN ('public', 'private')) DEFAULT 'public',
          consent BOOLEAN DEFAULT 0,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (guest_id) REFERENCES guests(id) ON DELETE CASCADE
        );`
    ], 'write');

    // Fetch local guests
    const localGuests = await localDb.execute('SELECT * FROM guests');
    console.log(`Found ${localGuests.rows.length} local guests to sync...`);

    for (const g of localGuests.rows) {
        await tursoDb.execute({
            sql: 'INSERT OR IGNORE INTO guests (id, name, phone, email, created_at) VALUES (?, ?, ?, ?, ?)',
            args: [g.id as any, g.name as any, g.phone as any, g.email as any, g.created_at as any]
        });
    }

    // Fetch local rsvps
    const localRsvps = await localDb.execute('SELECT * FROM rsvps');
    console.log(`Found ${localRsvps.rows.length} local RSVPs to sync...`);
    for (const r of localRsvps.rows) {
        await tursoDb.execute({
            sql: `INSERT OR IGNORE INTO rsvps (id, guest_id, status, guest_count, gift_preference, message, created_at) 
                  VALUES (?, ?, ?, ?, ?, ?, ?)`,
            args: [r.id as any, r.guest_id as any, r.status as any, r.guest_count as any, r.gift_preference as any, r.message as any, r.created_at as any]
        });
    }

    // Fetch local memories
    const localMemories = await localDb.execute('SELECT * FROM guest_memories');
    console.log(`Found ${localMemories.rows.length} local memories to sync...`);
    for (const m of localMemories.rows) {
        await tursoDb.execute({
            sql: `INSERT OR IGNORE INTO guest_memories (id, guest_id, relationship, memory, created_at) 
                  VALUES (?, ?, ?, ?, ?)`,
            args: [m.id as any, m.guest_id as any, m.relationship as any, m.memory as any, m.created_at as any]
        });
    }

    console.log('✅ Sync completed successfully!');
    process.exit(0);
}

sync().catch(err => {
    console.error('Sync failed:', err);
    process.exit(1);
});
