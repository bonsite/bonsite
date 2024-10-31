"use client";

import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  url: string;
  nome: string;
  imageSrc: string;
  imageAlt: string;
  preco: string;
  categoria: string;
}

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div key={product.id} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          alt={product.imageAlt}
          src={product.imageSrc}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={`/produto/${product.url}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.nome}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.categoria}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.preco}</p>
      </div>
    </div>
  );
};

const Page: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/store/fetchbonsai/all');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        const formattedData = await Promise.all(data.map(async (product: any) => {
          const imageSrc = await findImage(product.url);
          return {
            id: product.id,
            url: product.url,
            nome: product.nome,
            imageSrc,
            imageAlt: product.nome,
            preco: `R$${parseFloat(product.preco).toFixed(2)}`,
            categoria: product.categoria,
          };
        }));
        setProducts(formattedData);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Erro ao buscar produtos. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const findImage = async (url: string): Promise<string> => {
    const imagePath = `/images/bonsais/${url}/cover/cover.jpg`;
    const fallbackImagePath = '/images/default-image.jpg';
    const imageExists = await checkImageExists(imagePath);
    return imageExists ? imagePath : fallbackImagePath;
  };

  const checkImageExists = async (src: string): Promise<boolean> => {
    try {
      const response = await fetch(src);
      return response.ok;
    } catch {
      return false;
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;