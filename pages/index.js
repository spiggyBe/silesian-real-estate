import Head from 'next/head'
import Header from '../components/header'

const Home = () => {
  return (
    <>
      <Head>
        <title>Silesian Real Estate</title>
        <meta name="description" content='find your best place to live' />
        <link rel="icon" href='/favicon.ico' />
      </Head>

      <Header />
    </>
  )
}

export default Home