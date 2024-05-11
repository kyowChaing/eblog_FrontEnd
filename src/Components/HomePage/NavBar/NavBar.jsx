import React from 'react'
import { NavLink } from 'react-router-dom'

import {
    Avatar,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";




function NavBar() {
    return (
        <>

            <Navbar fluid rounded>
                <NavbarBrand href="https://flowbite-react.com">
                    {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
                </NavbarBrand>
                <div className="flex md:order-2">
                <NavLink to="/login">Login</NavLink>
                    <NavLink>Register</NavLink>
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                        }
                    >
                        <DropdownHeader>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                        </DropdownHeader>
                    </Dropdown>
                     <NavLink>Logout</NavLink>
                    <NavbarToggle />
                </div>
                <NavbarCollapse>
                    <NavbarLink to="/" active>
                        Home
                    </NavbarLink>
                    <NavbarLink href="/">Add Blog</NavbarLink>
                    <NavbarLink href="#">All Blogs</NavbarLink>
                    <NavbarLink href="/featuredblogs">Featured Blogs</NavbarLink>
                    <NavbarLink href="/wishlist">Wishlist</NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </>
    )
}

export default NavBar