import { openDb } from './db'

export async function setup() {

    const db = await openDb()

    
    await db?.exec(`
            CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            first_name TEXT NOT NULL,
            last_name TEXT
        );`
    )

    await db?.close()

    return 201;
}