import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const ShopList = () => {
  const { added, products } = useSelector((state) => state.data);
  const { length: count } = added;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id, product) => {
    const index = products.indexOf(product);
    const deleted = added.filter((add) => add._id !== id);
    dispatch({ type: "DELETE_PROD", payload: deleted });
    dispatch({ type: "DECREMENT_PROD", payload: index });
  };

  const handleIncrAmount = (amount) => {
    const index = products.indexOf(amount);
    dispatch({ type: "INCR_AMOUNT", payload: index });
  };

  const handleDecrAmount = (amount) => {
    const index = products.indexOf(amount);
    dispatch({ type: "DECR_AMOUNT", payload: index });
  };

  const handleReset = (amount) => {
    const index = products.indexOf(amount);
    dispatch({ type: "RESET_AMOUNT", payload: index });
  };

  const totalPrice = added
    .map((product) => product.amount * product.price)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <div>
      {count === 0 ? (
        <div className="empty-cart">
          <h1>Your Shopping Cart is currently empty</h1>
          <button
            onClick={() => navigate("/")}
            className="btn btn-primary ms-2"
          >
            back
          </button>
        </div>
      ) : (
        <div className="container ">
          {Array.from(
            added
              .reduce(
                (accumulator, currentProduct) =>
                  accumulator.set(currentProduct._id, currentProduct),
                new Map()
              )
              .values()
          ).map((add) => (
            <div key={add._id}>
              <div className="cart-shop-header">
                <div className="cart-product-sytlist">
                  <h5>Product </h5>
                  <p>{add.stylist}</p>
                </div>
                <h5>Price</h5>
                <h5>Quantity</h5>
              </div>
              <div key={add._id} className="cart-shop-details">
                <div className="cart-shop-extra">
                  <img src={add.cover} alt="" height={150} />
                  <p>€ {add.amount > 1 ? add.price * add.amount : add.price}</p>
                  <div className="amount-container">
                    <div className="col-1">
                      <span className="btn btn-info btn-sm m-2">
                        {add.amount}
                      </span>
                    </div>
                    <div>
                      <button
                        onClick={() => handleIncrAmount(add)}
                        className="btn btn-primary btn-sm m-2"
                      >
                        +
                      </button>
                      <button
                        onClick={() => handleDecrAmount(add)}
                        className={
                          add.amount === 1
                            ? "btn  btn-primary btn-sm m-2 disabled"
                            : "btn  btn-primary btn-sm m-2"
                        }
                      >
                        -
                      </button>
                    </div>
                    <button
                      onClick={() => handleDelete(add._id, add)}
                      className="btn btn-absolute btn-danger btn-sm m-2 "
                    >
                      x
                    </button>

                    <button
                      onClick={() => handleReset(add)}
                      className="btn btn-primary btn-sm m-2"
                    >
                      Reset
                    </button>
                  </div>
                </div>
                <div className="cart-shop-total icon">
                  <p>Original Price : € {add.price}</p>
                </div>
              </div>
              <hr />
            </div>
          ))}
          <h5>€ {totalPrice}</h5>
        </div>
      )}
    </div>
  );
};

export default ShopList;
