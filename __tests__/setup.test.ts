import { expect, test } from 'vitest'
import { setup } from '../src/app/api/setup'


test(
    'Database setup',
    async () => {
        const result = await setup()
        expect(result == 201 || 301).toBe(true)
    }
)