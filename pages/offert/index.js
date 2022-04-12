import { sanityClient, urlFor } from '../../sanity'
import Link from 'next/link'
import Image from 'next/image'

const Offert = ({ estateData }) => {
    console.log('OFFERT PAGE props', estateData)
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 justify-center items-center w-full px-20 pt-20'>
            {
                estateData && /* estateData.isFeatured === 'yes' */(
                    estateData.map(property => (
                        <Link
                            href={`offert/${property.slug.current}`}
                            key={property._id}
                            passHref
                        >
                            <div className=' flex flex-col cursor-pointer w-96 p-4 bg-gray-200 rounded'>
                                <div className='relative w-60 h-60'>
                                    <Image
                                        src={urlFor(property.mainImage).url()}
                                        layout='fill'
                                        alt='main pic'
                                    />
                                </div>
                                <h2>{property.title}</h2>
                            </div>
                        </Link>
                    ))
                )
            }
        </section>

    )
}

export default Offert

//REMEMBER: getServerSideProps if later I will implement browser of matched offerts
export const getServerSideProps = async () => {
    const query = `*[_type == 'property']`
    const estateData = await sanityClient.fetch(query)

    if (!estateData) {
        return {
            props: null,
            notFound: true
        }
    } else {
        return {
            props: {
                estateData
            }
        }
    }
}