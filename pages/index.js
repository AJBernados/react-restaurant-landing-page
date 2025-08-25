import Head from 'next/head'
import Header from '@/components/Header'
import Main from '@/components/Main'
// import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import ScrollUp from '@/components/ScrollUp'

export default function Home() {
  return (
    <div className='min-h-screen pt-[30px] md:pt-[140px] bg-white'>
      <Head>
        <title>React responsive restaurant landing page</title>
        <meta
          name='description'
          content='React responsive restaurant landing page'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Main />
      <footer className='w-full text-center text-[0.95rem] text-gray-600 py-4 border-t border-black/10 bg-brandGrey'>
        Copyright @ 2025 by Monkeys
      </footer>
      
      <Loader />
      <ScrollUp />
    </div>
  )
}
