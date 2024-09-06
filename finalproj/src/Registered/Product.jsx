import React from "react";

const Product = ({ data }) => {
  console.log(data);
  return (
    <div style={{ border: "2px solid black" }}>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <img src={data.img} />
      <strong>Price:</strong>
      {data.price}
      <br />
      <p>In stock :{}</p>
      <button>-</button>
      <button>+</button>
    </div>
  );
};

export default Product;
