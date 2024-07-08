import { openDb } from './db'
import { UserParams } from './utils'

export async function create(userParams: UserParams) {

    const db = await openDb()

    try {
        await db?.run(
            `INSERT INTO users (username, password_hash, email, first_name, last_name)
            VALUES (?, ?, ?, ?, ?);`,
            userParams.username,
            userParams.password_hash,
            userParams.email,
            userParams.first_name,
            userParams.last_name
        )
    } catch (err : any) {

        if (err.errno = 19) {
            return 301;
        }
    }

    await db?.close()

    return 201
}