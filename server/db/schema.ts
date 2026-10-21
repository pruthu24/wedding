import { createClient } from '@libsql/client';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const localDbPath = path.resolve(__dirname, 'wedding.sqlite');

const url = process.env.TURSO_DATABASE_URL || process.env.DATABASE_URL || `file:${localDbPath}`;
const authToken = process.env.TURSO_AUTH_TOKEN || undefined;

export const db = createClient({
  url,
  authToken,
});

let dbInitialized = false;

export async function initDb() {
  if (dbInitialized) return;

  await db.batch([
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
    );`,
    `CREATE TABLE IF NOT EXISTS conversation_sessions (
      id TEXT PRIMARY KEY,
      guest_id INTEGER,
      state TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (guest_id) REFERENCES guests(id) ON DELETE SET NULL
    );`,
    `CREATE TABLE IF NOT EXISTS reminders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      guest_id INTEGER NOT NULL,
      enabled BOOLEAN DEFAULT 0,
      channels TEXT,
      scheduled_dates TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (guest_id) REFERENCES guests(id) ON DELETE CASCADE
    );`
  ], "write");

  dbInitialized = true;
}
