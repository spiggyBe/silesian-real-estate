import { sanityClient } from '../../sanity'
import { urlFor } from '../../sanity'
import Image from 'next/image'

const singleAd = ({
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
            <h2>{propertyType}</h2>

            <div>{price}</div>
            <div>{bedrooms}</div>
            <div>{garden}</div>
            <div>{description}</div>
            <div>{agent}</div>
            <Image
                src={urlFor(mainImage).url()}
                layout='fill'
                objectFit='contain'
                alt='main pic' />
            {/* <div>{images}</div> */}
            {/* <div>{location}</div> */}
            {/* <div>{address}</div>*/}
        </>

    )
}

export default singleAd




export const getServerSideProps = async (context) => {
    const pageSlug = context.query.slug
    const query = `*[ _type == "property" && slug.current == $pageSlug][0]{
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
                title: singleAdData.title || null,
                location: singleAdData.location || null,
                address: singleAdData.address || null,
                propertyType: singleAdData.propertyType || null,
                mainImage: singleAdData.mainImage || null,
                images: singleAdData.images || null,
                price: singleAdData.price || null,
                bedrooms: singleAdData.bedrooms || null,
                garden: singleAdData.garden || null,
                description: singleAdData.description || null,
                agent: singleAdData.agent || null
            }
        }
    }
}