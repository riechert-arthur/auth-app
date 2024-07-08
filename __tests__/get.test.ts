import { expect, test } from 'vitest'
import { get } from '../src/app/api/get'
import { testUser } from './config'
import { deleteUser } from '../src/app/api/delete'
import { create } from '../src/app/api/create'

test(
    'Get a single user',
    async () => {
        await create(testUser)
        const result = await get(testUser.username)
        console.log(result)
        await deleteUser(testUser.username)
        expect(result).toStrictEqual(testUser)
    }
)