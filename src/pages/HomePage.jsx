// src/ProductList.js
import React from 'react';
import { useProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';


const ProductList = () => {
  const { products } = useProductContext();

  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
