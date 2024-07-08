import React from "react"
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import DeleteButton from './DeleteButton'

interface NavBarProps {
    session: any;
}
  

const NavBar: React.FC<NavBarProps> = ({ session }) =>  {
    return (
        <div className='w-full h-fit flex justify-between'>
            <h1 className='text-2xl font-bold'>Auth App</h1>
            <div className='w-fit flex'>
                <DeleteButton />
                { !session ? <LoginButton /> : <LogoutButton /> }
            </div>
        </div>
    )
}

export default NavBar