// src/pages/ProductPage.js
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/productService';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  console.log('HELLO')
  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      console.log('PRODDATA', productsData)
      setProducts(productsData);
    };
    getProducts();
  }, []);
  console.log('bye')
  console.log('PRODUCTS',  products)
  

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;