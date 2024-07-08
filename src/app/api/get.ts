import { openDb } from './db'

export async function get(username: String) {

    const db = await openDb()

    try {
        const row = await db?.get(`SELECT * FROM users WHERE username = ?`, [username]);
        return row;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        db?.close();
    }
}