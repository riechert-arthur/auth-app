import React from "react";
import { logout } from '../app/api/logout'
import { redirect } from "next/navigation";

export default function LogoutButton() {
    return (
        <form
        action={async () => {
          "use server";
          await logout();
          redirect("/login");
        }}
      >
        <button className='p-2 rounded-lg text-white bg-blue-500' type="submit">Logout</button>
      </form>
    )
}