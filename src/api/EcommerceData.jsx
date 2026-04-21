import React from "react";

const EcommerceData = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  console.log(data);

  return data;
};

export default EcommerceData;
