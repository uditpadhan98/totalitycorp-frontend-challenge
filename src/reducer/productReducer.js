const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        //...state return the whole initial data 
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      //action.payload is the whole data received from api
      //so just filter method is used to get the products in which featured is true 
      const featureData = action.payload.filter((curElem) => {
        return curElem.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload, //return all the products
        featureProducts: featureData, //return the featured products
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default ProductReducer;
