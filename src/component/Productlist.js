import React from "react";

function Productlist({ id, product }) {
  console.log(id);
  return (
    <div className="col-md-4">
      <img
        className="shoes"
        src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`}
        alt="상품1"
      />
      <div className="product-details">
        <h4>{product.title}</h4>
        <p>
          {product.content} & {product.price}
        </p>
      </div>
    </div>
  );
}

export default Productlist;
