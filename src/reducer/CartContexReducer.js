

const CartContexReducer = (state,action) => {

    if(action.type==="ADD_TO_CART"){
        let {id,color,amount,product}= action.payload;

        let cartProducts;

        cartProducts={
            id:id + color,
            name:product.name,
            color,
            amount,
            image: product.image[0].url,
            price: product.price,
            max: product.stock,
        }
        return {
            ...state,
            cart:[...state.cart, cartProducts], 
        }
        
    }
  
 
    return state;
}

export default CartContexReducer