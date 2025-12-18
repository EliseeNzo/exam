"use client"

import Link from "next/link"
import { ReactNode, useState } from "react"

type NavlinkProps = {
    href: string
    children: ReactNode
}

function NavLink(props: NavlinkProps){
    return(
        <li className="hover:bg-slate-600 hover:text-white transition-colors px-4 py-2 rounded-md">
            <Link href={props.href}>{props.children}</Link>
        </li>
    )
}

export default function Navbar() {

    return (
        <nav className="bg-blanc-site text-indigo-950 py-2 ">
            <ul className="container flex gap-4 justify-center relative">
                <NavLink href="/">Reservations</NavLink>
                <NavLink href="/bookings">bookings</NavLink>
            </ul>
        </nav>
    )
}
