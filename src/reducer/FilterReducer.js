const FilterRecuder = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curElem) => curElem.price);
      // console.log(Math.max.apply(null,priceArr) );

      // let maxPrice =priceArr.reduce((initialVal,curVal)=> Math.max(initialVal,curVal),0)

      let maxPrice = Math.max(...priceArr);
      console.log(maxPrice);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      // const userSortValue = document.getElementById("sort");
      // const sort_value=userSortValue.options[userSortValue.selectedIndex].value;
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      const { filter_products, sorting_value } = state;

      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };
      newSortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTER_VALUES":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;

      let tempFilterProduct = [...all_products];

      const { text, category, company, colors, price } = state.filters;
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }
      if (category !== "All") {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.category === category;
        });
      }
      // if(category==="All"){
      //   tempFilterProduct=[...all_products]
      // }

      if (company !== "All") {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.company.toLowerCase() === company.toLowerCase();
        });
      }

      if (colors !== "All") {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.colors.includes(colors);
        });
      }

      if (price === 0) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.price === price;
        });
      } else {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.price <= price;
        });
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "All",
          company: "All",
          colors: "All",
          maxPrice: state.filters.maxPrice,
          price: state.filters.maxPrice ,
          minPrice: state.filters .minPrice,
        },
      };

    default:
      return state;
  }
};

export default FilterRecuder;
