import React from "react";
import { FaTrash } from "react-icons/fa";
import { useCartContex } from "../context/cartContex";
import FormatPrice from "../helper/FormatPrice";
import CardAmountToggle from "./CardAmountToggle";

const CartItem = ({ id, name, image, color, price, amount }) => {

    const {removeItem,setDecrease,setIncrease} = useCartContex()
    // const setDecrease = () =>{
    //     // amount>1? setAmount(amount-1):setAmount(1)
    //   }
    //   const setIncrease = () =>{
    //     // amount < stock ? setAmount(amount+1) : setAmount(stock);
    //   }
    
  return (
    <div className="cart-heading grid grid-five-column">

      <div className="cart-image--name">
        <figure>
          <img src={image} alt={id} />
        </figure>
     

      <div >
        <p>{name}</p>
        <div className="color-div">
          <p>Color:</p>
          <div 
          className="color-style"  
          style={{ backgroundColor: color, color:color }}
          ></div>
        </div>
      </div>

      </div>

        {/* price  */}
      <div className="cart-hide">
            <p><FormatPrice price={price}/></p>
      </div>


    {/* Quantity 🗳️ */}

      <CardAmountToggle
        amount={amount}
        setDecrease={()=>setDecrease(id)}
        setIncrease={()=>setIncrease(id)}
      /> 

      {/* Subtotal 💭 */}
      <div className="cart-hide">
        <p><FormatPrice price={price*amount}  /></p>
      </div>

      {/* remove  */}
      <div>
        <FaTrash className="remove_icon" onClick={()=>removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
