import Head from 'next/head'
import Header from './header'
import Banner from './banner'

import "../styles/main.css"

const Home = () => {
  return (
    <div className="flex flex-col flex-1" 
      style={{background: 'url(/bg.png) no-repeat center/cover'}}>
      <Head>
        <title>Approve Order</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>  
      <Banner/>
    </div>
  )
}

export default Home