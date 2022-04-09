import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.png'
import Link from 'next/link'
import { SearchIcon } from '@heroicons/react/outline'

function Header() {
    return (
        <header className='grid grid-cols-3 sticky top-0 z-50 bg-white shadow-md p-5 md:px-10'>
            <Link
                href='/'
                passHref
            >
                <div className='relative flex items-center h-10 cursor-pointer'>
                    <Image
                        src={logo}
                        width={50}
                        height={50}
                        objectFit='contain'
                        objectPosition='left'
                        alt='logo'
                    />
                    <span className='inline-block text-2xl pl-4' >Silesia Real Estate</span>
                </div>
            </Link>
            <div className='flex items-center md:border-2 rounded-full p-2 md:shadow-sm'>
                <input
                    className='flex-grow pl-5 transparent outline-none'
                    type='text'
                    placeholder='What are you looking for...'
                />
                <SearchIcon className='hidden md:inline-flex h-8 bg-purple-500 text-white rounded-full p-2 cursor-pointer md:mx-2' />
            </div>
            <div></div>
        </header>
    )
}

export default Header