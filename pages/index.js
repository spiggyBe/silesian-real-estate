import Head from 'next/head'
import Banner from '../components/Banner'
import SmallCardWithCity from '../components/SmallCard'

const Home = ({ exploreData }) => {
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
          <h1 className='text-4xl text-gray-600 font-semibold pb-5'>Odnajdź swoją przestrzeń</h1>
          {exploreData?.map(({ id, image, location }) => (
            <SmallCardWithCity
              key={id}
              imgage={image}
              location={location}
            />
          ))}
        </section>
      </main>
    </>
  )
}

export default Home


/* export async function getStaticProps() {
  const exploreData = await fetch('----WRZUCIC TU ENDPOINT-----')
    .then(
      (res) => res.json()
    )
  return {
    props: {
      exploreData
    }
  }
} */