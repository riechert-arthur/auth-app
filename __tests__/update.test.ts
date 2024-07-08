import { expect, test } from 'vitest'
import { update } from '../src/app/api/update'
import { testUser, updatedTestUser } from './config'
import { create } from '../src/app/api/create'
import { deleteUser } from '../src/app/api/delete'
import { get } from '../src/app/api/get'

await create(testUser)
const resultBeforeUpdate = await get(testUser.username)
await update(updatedTestUser)
const resultAfterUpdate = await get(updatedTestUser.username)
await deleteUser(updatedTestUser.username)

test(
    'Update existing user fields except password',
    () => {
        expect(resultBeforeUpdate).toStrictEqual(testUser)
        expect(resultAfterUpdate).toStrictEqual(updatedTestUser)
    }
)