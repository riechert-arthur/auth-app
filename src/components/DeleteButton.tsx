import React from "react";
import { deleteProfile } from "../app/api/deleteProfile";
import { redirect } from 'next/navigation'

export default async function DeleteButton() {
    return (
        <form
            action={async () => {
                'use server'
                await deleteProfile()
                redirect('/login')
            }}>
            <button className='p-2 rounded-lg text-white bg-red-500' type='submit'>Delete Account</button>
        </form>
    )
}