const CartContexReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    // tackle the existing product ➕

    let existingProduct = state.cart.find((curItem) => {
      return curItem.id === id + color;
    });
    if (existingProduct) {
      let updatedProduts = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          let newAmount = curElem.amount + amount;

          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }

          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });

      return {
        ...state,
        cart: updatedProduts,
      };
    } else {
      let cartProducts = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProducts],
      };
    }
  }

  //to set the increment and decrement 🔼 🔽
  if (action.type === "SET_DECREMENT") {
    let updatedProdut = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;
        if (decAmount <= 0) {
          decAmount = 1;
        }
        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });

    return {
      ...state,
      cart: updatedProdut,
    };
  }

  //to set the increment and decrement 🔼 🔽
  if (action.type === "SET_INCREMENT") {
    let updatedProdut = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount + 1;
        if (decAmount >= curElem.max) {
          decAmount = curElem.max;
        }
        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });

    return {
      ...state,
      cart: updatedProdut,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter((curItem) => {
      return curItem.id !== action.payload;
    });

    return {
      ...state,
      cart: updatedCart,
    };
  }

  //clear item 🛍️
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  // total cart item

  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
      let { amount } = curElem;
      initialVal = initialVal + amount;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_item: updatedItemVal,
    };
  }

  // total cart price

  if (action.type === "CART_PRICE_ITEM") {
    let total_price = state.cart.reduce((initialVal, curElem) => {
      let { price, amount } = curElem;
      initialVal = initialVal + price * amount;

      return initialVal;
    }, 0);

    return{
        ...state,
        total_price:total_price  
    }

  }

  return state;
};

export default CartContexReducer;
