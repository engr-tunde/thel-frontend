import React, { useEffect, useState } from "react";
import LeftSideFunction from "../../component/sale/pos/LeftSideFunction";
import RightSideFunction from "../../component/sale/pos/RightSideFunction";

const PosPage = () => {
  const [addedProducts, setaddedProducts] = useState([]);
  const [total, settotal] = useState(0);

  // useEffect(() => {
  //   let currentAddedItems = addedProducts;

  //   if (itemToAdd) {
  //     const itemExists = currentAddedItems.filter(
  //       (ele) => ele.product_code === itemToAdd.product_code
  //     )[0];

  //     if (itemExists) {
  //       let itemExistsqty = Number(itemExists.qty + 1);
  //       let itemExiststotal_price = Number(
  //         itemExists.total_price * itemExists.qty
  //       );

  //       const otherItems = currentAddedItems.filter(
  //         (ele) => ele._id !== itemExists._id
  //       );
  //       otherItems.push({
  //         product_name: itemToAdd.product_name,
  //         product_code: itemToAdd.product_code,
  //         image: itemToAdd.image,
  //         product_price: itemToAdd.product_price,
  //         qty: itemExistsqty,
  //         total_price: itemExiststotal_price,
  //       });
  //       setaddedProducts(otherItems);
  //     } else {
  //       const item = {
  //         product_name: itemToAdd.product_name,
  //         product_code: itemToAdd.product_code,
  //         image: itemToAdd.image,
  //         product_price: itemToAdd.product_price,
  //         qty: 1,
  //         total_price: itemToAdd.product_price,
  //       };
  //       currentAddedItems.push(item);
  //       setaddedProducts(currentAddedItems);
  //     }
  //   }

  //   // if()
  // }, [itemToAdd]);

  const handleAddItemToCart = (item) => {
    let tp = 0;
    const itemExists = addedProducts.filter(
      (ele) => ele.product_code === item.product_code
    )[0];

    if (itemExists) {
      let itemExistsQTY = Number(itemExists.qty + 1);
      let itemExistsT_price = Number(itemExists.product_price * itemExistsQTY);

      const otherItems = addedProducts.filter(
        (ele) => ele._id !== itemExists._id
      );
      otherItems.push({
        product_name: item.product_name,
        product_code: item.product_code,
        image: item.image,
        product_price: item.product_price,
        qty: itemExistsQTY,
        total_price: itemExistsT_price,
      });
      setaddedProducts(otherItems);
      tp = Number(itemExistsT_price);
    } else {
      const prod = {
        product_name: item.product_name,
        product_code: item.product_code,
        image: item.image,
        product_price: item.product_price,
        qty: 1,
        total_price: item.product_price,
      };
      let currentAddedItems = addedProducts;
      currentAddedItems.push(prod);
      setaddedProducts(currentAddedItems);
      tp = Number(item.product_price);
    }
    //  settotal((prevVal) => ({...prevVal, username:"something"}));
    settotal((prevVal) => prevVal + tp);

    console.log("total", total);
  };

  useEffect(() => {
    let total = 0;
    if (addedProducts?.length > 0) {
      addedProducts.forEach((element) => {
        console.log("element", element);
        // total = total + prod.total_price;
      });
    }
  }, [addedProducts]);

  console.log("addedProducts", addedProducts);

  return (
    <div className="flex w-full p-2 gap-2">
      <LeftSideFunction total={total} addedProducts={addedProducts} />
      <RightSideFunction
        addedProducts={addedProducts}
        handleAddItemToCart={handleAddItemToCart}
      />
    </div>
  );
};

export default PosPage;
