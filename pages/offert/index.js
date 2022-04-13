import { sanityClient, urlFor } from '../../sanity'
import Link from 'next/link'
import Image from 'next/image'



const Offert = ({ estateData }) => {
    console.log('OFFERT PAGE props', estateData)
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 bg-gray-200 justify-center items-center w-full px-20 pt-20'>
            {
                estateData && (
                    estateData.map(property => (
                        <Link
                            href={`offert/${property.slug.current}`}
                            key={property._id}
                            passHref
                        >
                            <a className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                                <div className="relative pb-48 overflow-hidden">
                                    <div className='absolute inset-0 h-full w-full object-cover'>
                                        <Image
                                            src={urlFor(property.mainImage).url()}
                                            layout='fill'
                                            objectFit='cover'
                                            alt='main pic'
                                        />
                                    </div>
                                </div>
                                <div className="p-4">
                                    <span className="inline-block px-2 py-1 leading-none bg-purple-400 text-white rounded-full font-semibold uppercase tracking-wide text-xs">Highlight</span>
                                    <h2 className="mt-2 mb-2  font-bold">{property.title}</h2>
                                    <p className="text-sm">{property.description}</p>
                                    <div className="mt-3 flex items-center">
                                        <span className="text-sm font-semibold">Price</span>&nbsp;<span className="font-bold text-xl">{property.price}</span>&nbsp;<span className="text-sm font-semibold">€</span>
                                    </div>
                                </div>
                                <div className="p-4 border-t border-b text-xs text-gray-700">
                                    <span className="flex items-center mb-1">
                                        <span>ikona lozka:&nbsp;</span> <span>{property.bedrooms}</span>
                                    </span>
                                    <span className="flex items-center">
                                        <span>ikona agenta:&nbsp;</span> <span>{property.agent}</span>
                                    </span>
                                </div>
                            </a>
                        </Link>
                    ))
                )
            }
        </section>

    )
}

export default Offert


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