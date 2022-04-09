import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.png'
import Link from 'next/link'

function Header() {
    return (
        <header className='grid grid-cols-3 sticky top-0 z-50 bg-white shadow-md p-5'>
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
            <div></div>
            <div></div>
        </header>
    )
}

export default Header