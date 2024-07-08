import { get } from "./get";
import { create } from './create'
import { UserParams } from "./utils";

export async function signup(formData: FormData) {

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

    const newUser: UserParams = {
        username: username,
        password_hash: password,
        email: email,
        first_name: firstName,
        last_name: lastName,
    }

    if(!formData) {

    }

    const queryResult = await get(newUser.username)

    const result = await create(newUser)

    if (result == 301) {
        console.log("Couldn't insert in db")
    }

    return result
}