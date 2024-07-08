import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export async function openDb() {

    try {
        return await open({
            filename: './db/users.db',
            driver: sqlite3.Database
        })
    } catch (err) {
        console.log(err)
    }
}