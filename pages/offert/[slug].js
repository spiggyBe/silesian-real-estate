import { sanityClient } from '../../sanity'
import { urlFor } from '../../sanity'
import Image from 'next/image'
import Link from 'next/link'

const singleAd = ({
    id,
    title,
    location,
    address,
    mainImage,
    images,
    price,
    bedrooms,
    garden,
    description,
    agent,
    propertyType
}) => {

    return (
        <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
            <div className="relative pb-48 overflow-hidden">
                <div className='absolute inset-0 h-full w-full object-cover'>
                    <Image
                        src={urlFor(mainImage).url()}
                        layout='fill'
                        objectFit='cover'
                        alt='main pic'
                    />
                </div>
                <div>
                    {
                        images && (
                            images.map(({ _key, asset }) => (
                                <Image
                                    key={_key}
                                    src={urlFor(asset).url()}
                                    width={50}
                                    height={50}
                                    alt='details'
                                />
                            ))
                        )
                    }
                </div>
            </div>
            <div className="p-4">
                <h2 className="mt-2 mb-2  font-bold">{title}</h2>
                <p className="text-sm">{description}</p>
                <div className="mt-3 flex items-center">
                    <span className="text-sm font-semibold">Price</span>&nbsp;<span className="font-bold text-xl">{price}</span>&nbsp;<span className="text-sm font-semibold">€</span>
                </div>
            </div>
            <div className="p-4 border-t border-b text-xs text-gray-700">
                <span className="flex items-center mb-1">
                    <div>
                        <span>{address.street}&nbsp;{address.streetNo}</span>
                        <span>{address.city}</span>
                    </div>
                    <h2>Type: {propertyType}</h2>
                    <div>Bedrooms: {bedrooms}</div>
                    <div>Garden: {garden}</div>
                    <div>Description: <p>{description}</p></div>
                    <div>Price: {price}$</div>
                    <div>Talk to agent: {agent}</div>
                </span>
            </div>
            <Link
                href='/offert'
                passHref>
                <button className='rounded border2 border solid border-purple-400'>Back</button>
            </Link>
        </div>
    )
}

export default singleAd




export const getServerSideProps = async (context) => {
    const pageSlug = context.query.slug
    const query = `*[ _type == "property" && slug.current == $pageSlug][0]{
    id,
    title,
    address,
    location,
    mainImage,
    images,
    price,
    bedrooms,
    description,
    garden,
    agent,
    propertyType
}`

    const singleAdData = await sanityClient.fetch(query, { pageSlug })

    if (!singleAdData) {
        return {
            props: null,
            notFound: true
        }
    } else {
        return {
            props: {
                id: singleAdData.id,
                title: singleAdData.title,
                location: singleAdData.location,
                address: singleAdData.address,
                propertyType: singleAdData.propertyType,
                mainImage: singleAdData.mainImage,
                images: singleAdData.images,
                price: singleAdData.price,
                bedrooms: singleAdData.bedrooms,
                garden: singleAdData.garden,
                description: singleAdData.description,
                agent: singleAdData.agent
            }
        }
    }
}