import { test, expect } from 'vitest'
import { deleteUser } from '../src/app/api/delete'
import { create } from '../src/app/api/create'
import { testUser } from './config'

test(
    'Delete existing user.',
    async () => {
        await create(testUser)
        const result = await deleteUser(testUser.username)
        expect(result).toBe(201)
    }
)