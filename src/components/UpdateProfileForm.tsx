import React from "react";
import { updateProfile } from '../app/api/updateProfile'
import { redirect } from 'next/navigation'

interface NavBarProps {
    session: any;
}

const UpdateProfileForm: React.FC<NavBarProps> = async ({ session }) => {
    return (
        <form className='flex flex-col'
            action={async (formData) => {
                'use server'
                await updateProfile(formData, session)
                redirect('/')
            }
        }>
            <label>Username:</label>
            <input className='p-2 my-2 border rounded-md border-gray-300' name='username' placeholder={ session.queryResult.username } defaultValue={ session.queryResult.username }/>
            <label>Password:</label>
            <input className='p-2 my-2 border rounded-md border-gray-300' name='password' placeholder={ session.queryResult.password_hash } defaultValue={ session.queryResult.password_hash }/>
            <label>Email:</label>
            <input className='p-2 my-2 border rounded-md border-gray-300' name='email' placeholder={ session.queryResult.email } defaultValue={ session.queryResult.email }/>
            <label>First Name:</label>
            <input className='p-2 my-2 border rounded-md border-gray-300' name='first_name' placeholder={ session.queryResult.first_name } defaultValue={ session.queryResult.first_name }/>
            <label>Last Name:</label>
            <input className='p-2 my-2 border rounded-md border-gray-300' name='last_name' placeholder={ session.queryResult.last_name } defaultValue={ session.queryResult.last_name }/>
            <button className='mb-2 mt-4 bg-blue-500 rounded-md text-white py-2' type='submit'>Update</button>
        </form>
    )
}

export default UpdateProfileForm