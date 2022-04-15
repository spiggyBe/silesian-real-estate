import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Banner from '../components/Banner'
import { sanityClient, urlFor } from '../sanity'


const Home = ({ estateData }) => {
  return (
    <>
      <Head>
        <title>Silesian Real Estate</title>
        <meta name="description" content='find your best place to live' />
        <link rel="icon" href='/favicon.ico' as='icon' />
      </Head>
      <Banner />
      <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-gray-200 gap-6 md:gap-10 justify-center items-center w-full px-20 py-20'>
        {
          estateData && (
            estateData.map(el => (
              <Link
                href={`/${el.slug.current}`}
                key={el._id}
                passHref
              >
                <a className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                  <div className="relative pb-48 overflow-hidden">
                    <div className='absolute inset-0 h-full w-full object-cover'>
                      <Image
                        src={urlFor(el.mainImage).url()}
                        layout='fill'
                        objectFit='cover'
                        alt='main pic'
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="inline-block px-2 py-1 leading-none bg-purple-400 text-white rounded-full font-semibold uppercase tracking-wide text-xs">Highlight</span>
                    <h2 className="mt-2 mb-2  font-bold">{el.title}</h2>
                    <p className="text-sm">{el.description}</p>
                    <div className="mt-3 flex items-center">
                      <span className="text-sm font-semibold">Price</span>&nbsp;<span className="font-bold text-xl">{el.price}</span>&nbsp;<span className="text-sm font-semibold">€</span>
                    </div>
                  </div>
                  <div className="p-4 border-t border-b text-xs text-gray-700">
                    <span className="flex items-center mb-1">
                      <span>ikona lozka:&nbsp;</span> <span>{el.bedrooms}</span>
                    </span>
                    <span className="flex items-center">
                      <span>ikona agenta:&nbsp;</span> <span>{el.agent}</span>
                    </span>
                  </div>
                </a>
              </Link>
            ))
          )
        }
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