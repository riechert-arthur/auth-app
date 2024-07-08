import { openDb } from './db'

export async function deleteUser(username: String) {

    const db = await openDb()

    try {
        
        await db?.run('DELETE FROM users WHERE username = ?', username);

    } catch (err) {
        console.log(err)
    } finally {
        db?.close()
    }
}