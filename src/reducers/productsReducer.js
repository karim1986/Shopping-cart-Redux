const initState = {
  products: [],
  added: [],
  total: 0,
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case "GOT_PRODUCT":
      return {
        ...state,
        products: action.payload,
      };

    case "INCREMENT_PROD":
      state.products[action.payload].value++;
      return {
        ...state,
      };

    case "DECREMENT_PROD":
      state.products[action.payload].value--;
      return {
        ...state,
      };

    case "INCR_AMOUNT":
      state.products[action.payload].amount++;
      return {
        ...state,
      };

    case "DECR_AMOUNT":
      state.products[action.payload].amount--;
      return {
        ...state,
      };

    case "RESET_AMOUNT":
      state.products[action.payload].amount = 1;
      return {
        ...state,
      };

    case "ADDED_LIKE":
      state.products[action.payload].liked =
        !state.products[action.payload].liked;
      return {
        ...state,
      };

    case "SELECTED_PROD":
      
      return {
        ...state,
        added: [...state.added, action.payload],
      };

    case "DELETE_PROD":
      return {
        ...state,
        added: action.payload,
      };

    case "TOTAL_COST":
      return {
        ...state,
        total: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
