import { get } from './get'
import { encrypt } from './utils';
import { cookies } from 'next/headers';

export async function login(formData: FormData) {
    
    const credentials = { 
        username: formData.get('username'),
        password: formData.get('password'),
    }

    if (typeof credentials.username !== 'string' || typeof credentials.password !== 'string') {
        throw new Error('Username and password are required and must be strings');
    }

    const queryResult = await get(credentials.username)

    if(!queryResult) {

    }

    console.log('Login attempt detected')
    console.log(queryResult)

    if (queryResult.password_hash === credentials.password) {

        console.log('Login successful')

        const expires = new Date(Date.now() + 10 * 1000)
        const session = await encrypt({ queryResult, expires })

        cookies().set('session', session, { expires, httpOnly: true})
    }
}