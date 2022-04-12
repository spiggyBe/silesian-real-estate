import { useEffect } from "react"
import { useRouter } from "next/router"
import Link from 'next/link'
import Image from 'next/image'
import minion from '../public/minion-404.png'

const Page404 = () => {

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.replace('/offert')
        }, 5000)
    })

    return (
        <div
            style={{
                marginTop: 100,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Image src={minion} width={300} height={300} alt='minion for error 404' />
            <span>Sorry, the content you are looking for could not be found.</span>
            <span>if You won&apos;t be auto-replaced after 5 sec:</span>
            <div>
                <Link href='/offert'>
                    <a style={{ color: 'blue', textDecoration: 'underline' }}>
                        Go To Offert Page
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Page404