import { deleteUser } from './delete'
import { getSession } from './utils'

export async function deleteProfile() {

    const session = await getSession()

    const username = session.queryResult.username

    await deleteUser(username)
}