import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components"
import Nav from "./Nav"


const Header = () => {
  return (
    <MainHeader >


    <NavLink to={"/"}>
        <img src="./images/logo21.png" alt="my logo imge" className='logo'/>
    </NavLink>
    <Nav/>


    </MainHeader>
  )
}
const MainHeader = styled.header`
height:10rem;
padding: 0 4.8rem;
background-color: ${({theme})=> theme.colors.bg};
display:flex;
justify-content: space-between;
align-items: center;
position:relative;

.logo{
    height: 8rem;
    width: 38rem;
    padding: 0;
    object-fit: cover;
}


`
export default Header