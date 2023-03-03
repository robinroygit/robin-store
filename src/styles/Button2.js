/* <!-- HTML !-->
<button class="button-53" role="button">Button 53</button> */

import styled from "styled-components";

/* CSS */

export const Button2=styled.button`


  /* background-color: #3DD1E7; */
  background-color: rgb(98 100 243);

  border: 0 solid #E5E7EB;
  box-sizing: border-box;
  /* color: #000000; */
  color: white;
  display: flex;
  font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 3rem;
  font-weight: 700;
  justify-content: center;
  line-height: 4rem;
  padding: .75rem 1.65rem;
  position: relative;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  width: 100%;
  cursor: pointer;
  max-width: 360px;
  position: relative;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;


&:focus {
  outline: 0;
}

&:after {
  content: '';
  position: absolute;
  border: 1px solid #000000;
  bottom: 4px;
  left: 4px;
  width: calc(100% - 1px);
  height: calc(100% - 1px);
}

&:hover:after {
  bottom: 2px;
  left: 2px;
}

@media (max-width: 768px) {

    padding: .75rem 3rem;
    font-size: 3rem;
    max-width: 260px;

  
}


`;


