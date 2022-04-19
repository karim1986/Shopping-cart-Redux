const getProducts = () => {
  return {
    type: "GOT_PRODUCT",
  };
};

const selectedProducts = () => {
  return {
    type: "SELECTED_PROD",
  };
};

const likedProduct = () => {
  return {
    type: "ADDED_LIKE",
  };
};

const incrementProduct = () => {
  return {
    type: "INCREMENT_PROD",
  };
};

const decrementProduct = () => {
  return {
    type: "DECREMENT_PROD",
  };
};

const deleteProduct = () => {
  return {
    type: "DELETE_PROD",
  };
};

const incrementAmount = () => {
  return {
    type: "INCR_AMOUNT",
  };
};

const incrementAmount = () => {
  return {
    type: "DECR_AMOUNT",
  };
};

const resetAmount = () => {
  return {
    type: "RESET_AMOUNT",
  };
};

const totalPrice = () => {
  return {
    type: "TOTAL_COST",
  };
};
