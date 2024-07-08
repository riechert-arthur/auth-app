'use client'

import { redirect } from "next/navigation"
import React from 'react'

const LoginButton = () => {
    return (
        <button className='bg-blue-500' 
            onClick={() => {
                redirect('/login')
            }}>
            Login
        </button>
    )
}

export default LoginButton