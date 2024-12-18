import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="p-4 border border-gray-200 rounded-md">
      <img src={product.image} alt={product.name} className="w-full h-48 object-contain" />
      <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
      <p className="mt-1 text-gray-500">{product.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-gray-700 font-bold">${product.price}</span>
        <button onClick={() => addToCart(product)} className="px-4 py-2 bg-blue-500 text-white rounded-md">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;