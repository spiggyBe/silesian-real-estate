import Head from 'next/head'
//components
import Banner from '../components/Banner'
import SmallCardWithCity from '../components/SmallCard'
//fetch data
import { sanityClient } from '../sanity'

const Home = ({ estateData }) => {
  console.log(estateData)
  return (
    <>
      <Head>
        <title>Silesian Real Estate</title>
        <meta name="description" content='find your best place to live' />
        <link rel="icon" href='/favicon.png' />
      </Head>
      <Banner />
      <main className='w-full h-max mx-auto bg-purple-200'>
        <section className='max-w-7xl pt-6 bg-white h-50 mx-auto px-8'>
          {/*  <h1 className='text-4xl text-gray-600 font-semibold pb-5'>Find your best place!</h1>
          {estateData?.map(el => (
            <SmallCardWithCity
              key={el.id}
              imgage={el.image}
              location={el.location}
            />
          ))} */}
        </section>
      </main>
    </>
  )
}

export default Home

export const getServerSideProps = async () => {
  const query = `*[_type == 'property']`
  const estateData = await sanityClient.fetch(query)

  if (!estateData) {
    return {
      props: null
    }
  } else {
    return {
      props: {
        estateData
      }
    }
  }
}