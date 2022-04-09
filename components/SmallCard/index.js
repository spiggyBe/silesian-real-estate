import Image from 'next/image'

const SmallCardWithCity = ({ image, location }) => {
    return (
        <div className='flex items-center m-2 mt-5 space-x-4'>
            <div className='relative h-16 w-16'>
                <Image
                    src={image}
                    layout='fill'
                    //objectFit='cover'
                    className='rounded-lg'
                    alt='location city'
                />
            </div>
            <div>
                <h2>
                    {location}
                </h2>
            </div>
        </div>
    )
}

export default SmallCardWithCity