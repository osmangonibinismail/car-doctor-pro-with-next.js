import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {

    const navItems = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Blog",
            path: "/blog"
        },

        {
            title: "Service",
            path: "/services"
        },
        {
            title: "Contact",
            path: "/contact"
        },
    ]

    return (
        <div className='bg-base-100 text-slate-900 '>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <Link href={"/"}>
                        <Image alt='logo' src="/assets/logo.svg" height={60} width={100} />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className='flex items-center space-x-6'>
                        {
                            navItems.map((item) => (
                                <Link className='font-semibold hover:text-primary duration-300' key={item.path} href={item.path}>{item.title}</Link>
                            ))
                        }
                    </div>
                </div>
                <div className="navbar-end">
                    <div className=' flex items-center space-x-3'>
                        <IoCartOutline className='text-3xl font-semibold' />
                        <IoIosSearch className='text-3xl font-semibold' />
                        <a className="btn btn-outline btn-primary px-8">Appointment</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
