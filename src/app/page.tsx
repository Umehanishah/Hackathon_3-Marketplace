import React from 'react'

import Pudding_data from './fetch_data/pudding_data'
import Jelly_data from './fetch_data/jelly_data'
import Navigation from './ui/navigation'
import Footer from './ui/footer'
import Header from './ui/header'
import Categories from './ui/categories'



const Home = () => {
  return (
    <>
    <div>
      <Navigation/>
      <Header/>
      <Pudding_data/>
      <Categories/>
      <Jelly_data/>
     
      <Footer/>
    </div>
    </>
  )
}

export default Home