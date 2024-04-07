import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink, useLocation } from "react-router-dom";
import '../style/sideBar.css'
import clsx from "clsx";
import { FaBookOpen } from "react-icons/fa6";
import logo from '../../assets/Fay logo.svg'
import { FaHome } from "react-icons/fa";
import { BiBookContent, BiSolidCategory } from "react-icons/bi";
import { FaComments } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example({ arbic }) {
    const location = useLocation()

    return (
        <>
            <div>
                <Disclosure as="nav" className="bg-white rounded-2xl ">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 flex gap-2 items-center">
                                            <img
                                                className="w-1/3 h-3/4 lg:hidden md:hidden"
                                                src={logo}
                                                alt="Fay Logo"
                                            />
                                            <h1 className="text-xl font-bold text-black " >
                                                {location.pathname == "/main/main" ? "products" :
                                                    location.pathname.includes("product")?
                                                 "products/" + location.pathname.slice(6) : location.pathname.slice(6) }
                                            </h1>
                                        </div>

                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">
                                            <button
                                                type="button"
                                                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                            >
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">View notifications</span>
                                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>

                                            {/* Profile dropdown */}
                                            <Menu as="div" className="relative ml-3">
                                                <div>
                                                    <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                        <span className="absolute -inset-1.5" />
                                                        <span className="sr-only">Open user menu</span>
                                                        <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        {userNavigation.map((item) => (
                                                            <Menu.Item key={item.name}>
                                                                {({ active }) => (
                                                                    <a
                                                                        href={item.href}
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100' : '',
                                                                            'block px-4 py-2 text-sm text-gray-700'
                                                                        )}
                                                                    >
                                                                        {item.name}
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        ))}
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-0.5" />
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                    <ul className="flex flex-col gap-6 list-none pt-9" >

                                        {/* <li className="w-full mt-5" >
                                            <NavLink className={
                                                clsx(
                                                    "w-full flex items-center gap-2 text-black font-bold text-lg  p-2 rounded-2xl transition",
                                                    {
                                                        "w-full flex items-center gap-2 flex-row-reverse text-black font-bold text-lg hover:bg-slate-50 p-2 rounded-2xl transition"
                                                            : arbic == true
                                                    }

                                                )
                                            } to="/" state={{ arbic: arbic }} ><FaHome style={{ color: "#071321", backgroundColor: "#D7E6EA", padding: "0.5rem", borderRadius: "0.5rem" }} size={35} />
                                                <h1>{
                                                    arbic == true ? "المنجات" : "Home"
                                                }</h1>
                                            </NavLink>
                                        </li> */}
                                        <li onClick={e => changeSection(e)} className="w-full" >
                                            <NavLink className={
                                                clsx(
                                                    "w-full flex items-center gap-2 text-black font-bold text-lg  p-2 rounded-2xl transition",
                                                    {
                                                        "w-full flex items-center gap-2 flex-row-reverse text-black font-bold text-lg hover:bg-slate-50 p-2 rounded-2xl transition"
                                                            : arbic == true
                                                    }

                                                )
                                            } to="/" state={{ arbic: arbic }} ><FaBookOpen style={{ color: "#071321", backgroundColor: "#D7E6EA", padding: "0.5rem", borderRadius: "0.5rem" }} size={35} />
                                                <h1>{
                                                    arbic == true ? "المنجات" : "Products"
                                                }</h1>
                                            </NavLink>
                                        </li>
                                        <li className="w-full " >
                                            <NavLink className={
                                                clsx(
                                                    "w-full flex items-center gap-2 text-black font-bold text-lg p-2 rounded-2xl transition",
                                                    {
                                                        "w-full flex flex-row-reverse items-center gap-2 text-black font-bold text-lg p-2 rounded-2xl transition"
                                                            : arbic == true
                                                    }

                                                )
                                            } to="/categories" state={{ arbic: arbic }}><BiSolidCategory style={{ color: "#071321", backgroundColor: "#D7E6EA", padding: "0.5rem", borderRadius: "0.5rem" }} size={35} />
                                                <h1>{
                                                    arbic == true ? "جدول" : "Categories"
                                                }</h1>
                                            </NavLink>
                                        </li>
                                        <li className="w-full " >
                                            <NavLink className={
                                                clsx(
                                                    "w-full flex items-center gap-2 text-black font-bold text-lg p-2 rounded-2xl transition",
                                                    {
                                                        "w-full flex items-center gap-2 flex-row-reverse text-black font-bold text-lg p-2 rounded-2xl transition"
                                                            : arbic == true
                                                    }

                                                )
                                            } to="comments" state={{ arbic: arbic }}><FaComments style={{ color: "#071321", backgroundColor: "#D7E6EA", padding: "0.5rem", borderRadius: "0.5rem" }} size={35} />
                                                <h1>{
                                                    arbic == true ? "جدول" : "Comments"
                                                }</h1>
                                            </NavLink>
                                        </li>
                                        <li className="w-full" >
                                            <NavLink className={
                                                clsx(
                                                    "w-full flex items-center gap-2 text-black font-bold text-lg p-2 rounded-2xl transition",
                                                    {
                                                        "w-full flex items-center gap-2 flex-row-reverse text-black font-bold text-lgp-2 rounded-2xl transition"
                                                            : arbic == true
                                                    }

                                                )
                                            } to="/contact" state={{ arbic: arbic }}>
                                                <MdContactMail style={{ color: "#071321", backgroundColor: "#D7E6EA", padding: "0.5rem", borderRadius: "0.5rem" }} size={35} />
                                                <h1>{
                                                    arbic == true ? "جدول" : "Contact"
                                                }</h1>
                                            </NavLink>
                                        </li>

                                        <li className="w-full" >
                                            <NavLink className={
                                                clsx(
                                                    "w-full flex items-center gap-2 text-black font-bold text-lg p-2 rounded-2xl transition",
                                                    {
                                                        "w-full flex items-center gap-2 flex-row-reverse text-black font-bold text-lgp-2 rounded-2xl transition"
                                                            : arbic == true
                                                    }

                                                )
                                            } to="/best-selling-books" state={{ arbic: arbic }}>
                                                <BiBookContent style={{ color: "#071321", backgroundColor: "#D7E6EA", padding: "0.5rem", borderRadius: "0.5rem" }} size={35} />
                                                <h1>{
                                                    arbic == true ? "جدول" : "Best Selling Books"
                                                }</h1>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="border-t border-gray-700 pb-3 pt-4">
                                    <div className="flex items-center px-5">
                                        <div className="flex-shrink-0">
                                            <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-base font-medium leading-none text-white">{user.name}</div>
                                            <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                                        </div>
                                        <button
                                            type="button"
                                            className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div className="mt-3 space-y-1 px-2">
                                        {userNavigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>


            </div>
        </>
    )
}

