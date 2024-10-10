'use client';
import React, { useEffect, useState } from 'react';
import ProductItem from '../ProductItem';

interface Product {
  id: number;
  nome: string;
  imageSrc: string;
  imageAlt: string;
  preco: string;
  categoria: string;
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
        const formattedData = await Promise.all(data.map(async (product: any) => {
          const imageSrc = await findImage(product.id); // Dynamically fetch image
          return {
            id: product.id,
            nome: product.nome,
            imageSrc, // Use the found image source
            imageAlt: product.nome,
            preco: `R$${parseFloat(product.preco).toFixed(2)}`,
            categoria: product.categoria,
          };
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

  const findImage = async (id: number): Promise<string> => {
    const imagePath = `/images/bonsais/cover/${id}/cover.jpg`; // Path to the specific image
    const fallbackImagePath = '/images/bonsais/cover/default-image.jpg'; // Path to the fallback image

    const imageExists = await checkImageExists(imagePath); // Check if specific image exists
    return imageExists ? imagePath : fallbackImagePath; // Return the specific image or fallback
  };

  const checkImageExists = async (src: string): Promise<boolean> => {
    try {
      const response = await fetch(src);
      return response.ok; // Check if the image is accessible
    } catch {
      return false; // Return false if there's an error
    }
  };

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
              name={product.nome}
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