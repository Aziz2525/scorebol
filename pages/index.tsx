import type { NextPage } from 'next'
import Head from 'next/head'
import Fikstur from './components/Fikstur'
import Sidebar from './components/Sidebar'
import { getFikstur } from '../redux/actions/fiksturActions';
import { wrapper } from '../redux/store';

const Home: NextPage = () => {

  return (
    <div className="">
      <Head>
        <title>Scorebol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-row'>
        <Sidebar />
        <Fikstur />
      </main>


    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  await context.dispatch(getFikstur(context.dispatch))
})

export default Home
