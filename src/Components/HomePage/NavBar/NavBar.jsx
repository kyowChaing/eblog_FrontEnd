import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from '../../Providers/AuthProvider';
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

import logo from '../../../../public/logo.png'


function NavBar() {

    const { user, logOut, setReload } = useContext(AuthContext);
    const [selectedItem, setSelectedItem] = useState('home');

    
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
   

    const handleLogOut = async () => {
        try {
            await logOut();
            // Handle successful login

            setTimeout(() => {
                // toast.success('Log Out successful');

            }, 300);

        } catch (error) {
            setError('logout', { type: 'manual', message: error.message });
            toast.error('Log Out failed: ' + error.message);
        }
    };

    return (
        <>

            <Navbar fluid rounded>
                <NavbarBrand href="https://flowbite-react.com">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        <div className='flex justify-center items-center gap-1'><img src={logo} alt="" /> <span>eblog</span></div>
                        
                    </span>
                </NavbarBrand>
                <div className="flex md:order-2">

                    {
                        user ? <div className=' flex justify-center items-center gap-2'> <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <Avatar alt="User settings" img={user?.photoURL ? user?.photoURL : "https://lh3.googleusercontent.com/a/ACg8ocJoqz1nGhQzJlqX7JPNCv_Z_eqU4foxJYUL4ZiiaTPOkN914R-P=s96-c"} rounded />
                            }
                        >
                            <DropdownHeader>
                                <span className="block text-sm">{user?.displayName ? user.displayName : "Kyow"}</span>
                                <span className="block truncate text-sm font-medium">{user?.email ? user.email : "kyowchaing15@gmail.com"}</span>
                            </DropdownHeader>
                        </Dropdown>
                            <NavLink onClick={handleLogOut} className=" mx-2 text-lg font-semibold ">Logout</NavLink>
                            

                        </div>

                            :
                            <div>
                                <NavLink to="/login" className=" mx-2 text-lg font-semibold ">Login</NavLink>
                                <NavLink to="/signup" className="mx-2 text-lg font-semibold">Register</NavLink>

                            </div>
                    }

                    <NavbarToggle />
                </div>
                <NavbarCollapse>
                    <NavbarLink href="/" className={ selectedItem === 'home' ? 'active' : ''} onClick={() => handleItemClick('home')}>
                        Home
                    </NavbarLink>
                   
                    <NavbarLink className={selectedItem === 'addblog' ? 'active' : ''} onClick={() => handleItemClick('addblog')} href="/addblog">Add Blog</NavbarLink>
                    <NavbarLink className={selectedItem === 'allblogs' ? 'active' : ''} onClick={() => handleItemClick('allblogs')} href="/allblogs">All Blogs</NavbarLink>
                    <NavbarLink className={selectedItem === 'featuredblogs' ? 'active' : ''} onClick={() => handleItemClick('featuredblogs')} href="/featuredblogs">Featured Blogs</NavbarLink>
                    <NavbarLink className={selectedItem === 'wishlist' ? 'active' : ''} onClick={() => handleItemClick('wishlist')} href="/wishlist">Wishlist</NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </>
    )
}

export default NavBar