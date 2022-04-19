import { v4 as uuidv4 } from "uuid";

const bagsShop = () => {
  return [
    {
      name: "Ravea Leather Handbag",
      cover:
        "https://images.pexels.com/photos/1040384/pexels-photo-1040384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      stylist: "Alfred Erikson",
      _id: uuidv4(),
      value: 0,
      price: 169.0,
      amount: 1,
      liked: false,
    },
    {
      name: "Henkelt bag",
      cover:
        "https://images.pexels.com/photos/1374910/pexels-photo-1374910.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      stylist: "Lauren Ralph Lauren",
      _id: uuidv4(),
      value: 0,
      amount: 1,
      price: 400.0,
    },
    {
      name: "Bag Dior Etoile",
      cover:
        "https://images.pexels.com/photos/1204464/pexels-photo-1204464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      stylist: "Dior",
      _id: uuidv4(),
      value: 0,
      amount: 1,
      price: 100.0,
    },
    {
      name: "Gucci Bag",
      cover:
        "https://images.pexels.com/photos/3661622/pexels-photo-3661622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      stylist: "Gucci",
      _id: uuidv4(),
      value: 0,
      amount: 1,
      price: 300.0,
    },
    {
      name: "Prada Yallow",
      cover:
        "https://images.pexels.com/photos/10669657/pexels-photo-10669657.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      stylist: "Gucci",
      _id: uuidv4(),
      value: 0,
      amount: 1,
      price: 200.0,
    },
  ];
};

export default bagsShop;
