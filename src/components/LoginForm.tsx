import { login } from "@/app/api/login"
import { redirect } from "next/navigation"

export default function LoginForm() {
    return (
        <form className='flex flex-col'
            action={async (formData) => {
                'use server'
                await login(formData)
                redirect('/')
            }}>
            <label>Username:</label>
            <input className='p-2 my-2 border rounded-md border-gray-300' name='username' placeholder='username'/>
            <label>Password:</label>
            <input className='p-2 my-2 border rounded-md border-gray-300' name='password' placeholder='password'/>
            <button className='mb-2 mt-4 bg-blue-500 rounded-md text-white py-2' type='submit'>Sign In</button>
        </form>
    )
}