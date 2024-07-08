import { openDb } from './db'

export async function update(updatedParams: any) {

    const db = await openDb()

    try {
        const row = await db?.run(`
            UPDATE users
            SET username = ?, password_hash = ?, email = ?, first_name = ?, last_name = ?
            WHERE id = ?`,
            [updatedParams.username,
            updatedParams.password_hash,
            updatedParams.email,
            updatedParams.first_name,
            updatedParams.last_name,
            updatedParams.id]
        )

        return row
    } catch (err) {
        console.error(err)
    } finally {
        await db?.close()
    }
}