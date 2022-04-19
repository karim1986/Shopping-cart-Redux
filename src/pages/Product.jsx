import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { BsSuitHeart } from "react-icons/bs";
import { BsSuitHeartFill } from "react-icons/bs";
import { FaShopify } from "react-icons/fa";

const Product = () => {
  const { products } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleAddFav = (product) => {
    const index = products.indexOf(product);
    dispatch({ type: "INCREMENT_PROD", payload: index });
    dispatch({ type: "SELECTED_PROD", payload: product });
  };

  const handleLike = (product) => {
    const index = products.indexOf(product);
    dispatch({ type: "ADDED_LIKE", payload: index });
  };

  return (
    <div className="flex-Container">
      <AnimatePresence>
        {products.map((product, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.25 }}
            custom={i}
            key={product._id}
            className="shop-card-container"
          >
            <div>
              <div className="shop-card-image">
                <div
                  onClick={() => handleLike(product)}
                  className="icon-container-two"
                >
                  {!product.liked ? (
                    <BsSuitHeart size={25} color="#fff" />
                  ) : (
                    <BsSuitHeartFill size={25} color="red" />
                  )}
                  <BsSuitHeart size={25} color="#fff" />
                </div>
                <div className="icon-container-one">
                  <FaShopify
                    onClick={() => handleAddFav(product)}
                    className="shoping-bag"
                    size={35}
                  />
                </div>
                <img src={product.cover} alt="" />
                <p className="shop-price">€ {product.price}</p>
                <div className="shop-desription">
                  <p>{product.name}</p>
                  <p className="product-stylist">{product.stylist}</p>
                  <p>new</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Product;
