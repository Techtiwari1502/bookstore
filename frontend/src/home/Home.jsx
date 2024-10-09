import React from 'react'

import Navbar from '../component/Navbar'
import Hello from '../component/Hello'
import Footer from '../component/Footer'
import Freebook from '../component/Freebook'

function Home() {
  return (
    <>
        <Navbar/>
        <Hello/>
        <Freebook />
        <Footer/>
    </>
  )
}

export default Home
