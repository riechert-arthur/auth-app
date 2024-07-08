import { signup } from '../app/api/signup'
import { redirect } from 'next/navigation'

export default function LoginForm() {
    return (
        <form className='flex flex-col'
            action={async (formData) => {
                'use server'
                await signup(formData)
                redirect('/login')
            }
        }>
            <label>Username:</label>
            <input className='p-2 my-2 border rounded-md border-gray-300' name='username' placeholder='username'/>
            <label>Password:</label>
            <input className='p-2 my-2 border rounded-md border-gray-300' name='password' placeholder='password'/>
            <label>Email:</label>
            <input className='p-2 my-2 border rounded-md border-gray-300' name='email' placeholder='test@test.com'/>
            <label>First Name:</label>
            <input className='p-2 my-2 border rounded-md border-gray-300' name='first_name' placeholder='first name'/>
            <label>Last Name:</label>
            <input className='p-2 my-2 border rounded-md border-gray-300' name='last_name' placeholder='last name'/>
            <button className='mb-2 mt-4 bg-blue-500 rounded-md text-white py-2' type='submit'>Register</button>
        </form>
    )
}