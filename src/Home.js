import React from 'react'
import FeatureProducts from './components/FeatureProducts';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';
 


const Home = () => {
  const data= {
    name:"Robin Store",
  }
  return (
    <>

      <HeroSection myData={data}/>
      <FeatureProducts/>
      <Services/>
      <Trusted/>

    </>
  )
}


export default Home