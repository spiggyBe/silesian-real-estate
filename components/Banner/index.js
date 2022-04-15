import Image from 'next/image'
import banner from '../../public/banner-slaskie-image.jpg'
import Link from 'next/link'

const Banner = () => {

    return (
        <div className='relative  h-[300px] sm:h[400px] md:h-[500px] lg:h-[600px]'>
            <Image
                src={banner}
                layout='fill'
                objectFit='cover'
                alt='image silesian region'
                priority
            />
        </div>
    )
}

export default Banner