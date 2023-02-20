
import {  useProductContext } from './context/ProductContext';
import HeroSection from './components/HeroSection'

const About = () => {


  const {myName,age,gender} = useProductContext();

  const data={
    name:"Robin Ecommerce",
  }

  return (
    <>
      {myName + age +gender}
    <HeroSection myData={data} /> 
    </>
  )
}

export default About