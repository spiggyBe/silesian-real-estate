import Image from 'next/image'
import banner from '../../public/banner-slaskie-image.jpg'

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
            <div className='absolute top-1/2 w-full text-center'>
                <div className=' text-center w-auto bg-purple-500 py-5 opacity-80'>
                    <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full border-2 border-solid border-purple-500 font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 cursor-pointer'>
                        More...
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Banner