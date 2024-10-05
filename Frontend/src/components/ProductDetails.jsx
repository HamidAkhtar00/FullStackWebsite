import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Product Details for Product ID: {id}</h1>
      {/* Fetch and display detailed info based on product ID */}
    </div>
  );
};

export default ProductDetails;