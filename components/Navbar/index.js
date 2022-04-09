import { useState } from 'react'
import Image from 'next/image'
import logo from '../../public/logo.png'
import Link from 'next/link'
import { SearchIcon } from '@heroicons/react/outline'

function Navbar() {

    const [open, setOpen] = useState(false)

    const handleOpenClose = () => {
        setOpen(!open)
    }

    return (
        <header className='grid grid-cols-3 sticky top-0 z-50 bg-white shadow-md p-5 md:px-10'>
            <MobileNav open={open} handleOpenClose={handleOpenClose} />
            <Link
                href='/'
                passHref
            >
                <div className='relative flex items-center cursor-pointer space-x-2'>
                    <Image
                        src={logo}
                        width={50}
                        height={50}
                        objectFit='contain'
                        objectPosition='left'
                        alt='logo'
                    />
                    <span className='hidden text-gray-600 text-sm md:inline-block md:text-lg'>Silesia Real Estate</span>
                </div>
            </Link>
            <div className='flex items-center md:border-2 rounded-full p-2 md:shadow-sm'>
                <input
                    className='flex-grow pl-5 transparent outline-none text-sm text-gray-600 placeholder-gray-300'
                    type='text'
                    placeholder='Szukaj...'
                />
                <SearchIcon className='hidden md:flex h-8 bg-purple-500 text-white rounded-full p-2 cursor-pointer md:mx-2' />
            </div>
            <ul className='hidden md:flex items-center md:justify-around '>
                <Link href='/'><a className='text-purple-500 cursor-pointer'>Główna</a></Link>
                <Link href='/nieruchomosci'><a className='text-purple-500 cursor-pointer'>Nieruchomości</a></Link>
                <Link href='/blog'><a className='text-purple-500 cursor-pointer'>Blog</a></Link>
            </ul>
            <div className=' flex justify-end items-center md:hidden'>
                <div
                    className="z-50 flex relative w-8 h-8 flex-col justify-around items-center cursor-pointer md:hidden"
                    onClick={handleOpenClose}>
                    <span className={`h-1 w-full bg-purple-500 rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : null}`} />
                    <span className={`h-1 w-full bg-purple-500 rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-purple-500 rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : null}`} />
                </div>
            </div>
        </header>
    )
}

export default Navbar

function MobileNav({ open, handleOpenClose }) {
    return (
        <div className={`flex justify-end absolute top-[85px] left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md md:hidden`}>
            <div className="flex flex-col items-end pr-4">
                <Link href='/'>
                    <a
                        className="text-lg text-purple-500"
                        onClick={handleOpenClose}>
                        Główna
                    </a>
                </Link>
                <Link href='/nieruchomosci'>
                    <a
                        className="text-lg text-purple-500"
                        onClick={handleOpenClose}>
                        Nieruchomości
                    </a>
                </Link>
                <Link href='/blog'>
                    <a
                        className="text-lg text-purple-500"
                        onClick={handleOpenClose}>
                        Blog
                    </a>
                </Link>
            </div>
        </div>
    )
}