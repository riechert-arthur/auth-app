import { update } from './update'
import { encrypt } from './utils'
import { get } from './get'
import { cookies } from 'next/headers'

export async function updateProfile(formData : any, session : any) {

    const username = formData.get('username')
    const password = formData.get('password')
    const email = formData.get('email')
    const firstName = formData.get('first_name')
    const lastName = formData.get('last_name')

    if (typeof username !== 'string'
        || typeof password !== 'string'
        || typeof email !== 'string'
        || typeof firstName !== 'string'
        || typeof lastName !== 'string') {
        throw new Error('Username and password are required and must be strings');
    }

    const userParams = {
        id: session.queryResult.id,
        username: username,
        password_hash: password,
        email: email,
        first_name: firstName,
        last_name: lastName
    }

    await update(userParams)

    const queryResult = await get(username)

    const expires = new Date(Date.now() + 10 * 1000)
    const newSession = await encrypt({ queryResult, expires })

    cookies().set('session', newSession, { expires, httpOnly: true})
}