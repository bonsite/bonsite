'use client';
import React, { useEffect, useState } from 'react';
import ProductItem from '../ProductItem';

interface Product {
  id: number;
  nome: string; // Adjusted to match your database column names
  imageSrc: string; // You may want to adjust this if you have a separate image handling
  imageAlt: string; // Same as above
  preco: string; // Adjusted to match your database column names
  categoria: string; // Adjusted to match your database column names
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/store/fetchbonsai/all');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        const formattedData = data.map((product: any) => ({
          id: product.id,
          nome: product.nome,
          imageSrc: product.imageSrc || '', // Ensure you handle image source correctly
          imageAlt: product.nome, // Adjust as necessary
          preco: `R$${(parseFloat(product.preco) || 0).toFixed(2)}`, // Convert to float and format the price
          categoria: product.categoria,
        }));
        setProducts(formattedData);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Simple loading state
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              name={product.nome} // Updated to match your database column names
              href="#" // Adjust as necessary
              imageSrc={product.imageSrc} // Ensure you have a valid image src
              imageAlt={product.imageAlt} // Ensure you have a valid alt text
              price={product.preco} // Updated to match your database column names
              categoria={product.categoria} // Updated to match your database column names
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;