import React from 'react'
import logo from "../../assets/logo.png"
import { FaCaretDown } from "react-icons/fa";

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "Best Seller",
        link: "/#services"
    }
]

const DropdownLinks = [
    {
        name: "Top Sellers",
        link: "/#",
    },
    {
        name: "New Arrivals",
        link: "/#"
    },
    {
        name: "Trending Now",
        link: "/#"
    }
]

const Navbar = () => {
    return (
        <>
            <div className='w-full bg-white dark:bg-black'>
                <div className='flex justify-between items-center '>
                    <div >
                        {/* logo section  */}
                        <div>
                            <a href="#" className='flex items-center text-2xl sm:text-3xl'>
                                <img src={logo} alt="logo" className='w-10' />
                                <span className='font-bold'>Watch </span>Store
                            </a>
                        </div>
                    </div>
                    {/* menu section  */}
                    <div className='flex justify-between items-center gap-2'>
                        <div>
                            dark mode
                        </div>
                        <ul className='flex gap-4 items-center'>
                            {Menu.map((Menu) => (
                                <li key={Menu.id}>
                                    <a href={Menu.link} className='inline-block py-4 px-4 hover:text-primary'>{Menu.name}</a>
                                </li>
                            ))}
                            {/* simple dropdown menu   */}
                            <li className='group relative cursor-pointer'>
                                <a href="#" className='flex h-[72px] items-center gap-[2px]'>
                                    Quick Links
                                    <span>
                                        <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
                                    </span>
                                </a>
                                {/* Dropdown menu  */}
                                <div>
                                    <ul>
                                        {DropdownLinks.map((link) => (
                                            <li key={link.name}
                                                className='inline-block py-4 px-4 hover:text-primary'>
                                                {link.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar