import { expect, test } from 'vitest'
import { create } from '../src/app/api/create'
import { deleteUser } from '../src/app/api/delete'
import { testUser } from './config'

test(
    'Create new user',
    async () => {
        const result = await create(testUser)
        expect(result == 201 || result == 301).toBe(true)
    }
)