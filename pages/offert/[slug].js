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
        <>
            <h1>{title}</h1>
            <Image
                src={urlFor(mainImage).url()}
                width={200}
                height={200}
                objectFit='contain'
                alt='main pic'
            />
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
            <Link
                href='/offert'
                passHref>
                <button>Back</button>
            </Link>
        </>
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