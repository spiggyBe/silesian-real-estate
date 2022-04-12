import Head from 'next/head'
//components
import Banner from '../components/Banner'

//fetch data
import { sanityClient } from '../sanity'

const Home = ({ estateData }) => {

  return (
    <>
      <Head>
        <title>Silesian Real Estate</title>
        <meta name="description" content='find your best place to live' />
        <link rel="icon" href='/favicon.ico' />
      </Head>
      <Banner />
      <main className='w-full h-max mx-auto bg-purple-200'>
        <section className='max-w-7xl pt-6 bg-white h-50 mx-auto px-8'>

        </section>
      </main>
    </>
  )
}

export default Home

export const getStaticProps = async () => {
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
      },
      revalidate: 6000
    }
  }
}