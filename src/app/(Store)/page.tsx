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
  id: number;
  url: string;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  categoria: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ id, url, name, href, imageSrc, imageAlt, price, categoria }) => {
  return (
    <div key={id} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          alt={imageAlt}
          src={imageSrc}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{categoria}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{price}</p>
      </div>
    </div>
  );
};

const Page: React.FC = () => {
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
          const imageSrc = await findImage(product.id);
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
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const findImage = async (id: number): Promise<string> => {
    const imagePath = `/images/bonsais/cover/${id}/cover.jpg`;
    const fallbackImagePath = '/images/bonsais/cover/default-image.jpg';
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

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              name={product.nome}
              href={`/produto/${product.url}`} // Adjust as necessary
              imageSrc={product.imageSrc}
              imageAlt={product.imageAlt}
              price={product.preco}
              categoria={product.categoria}
              url={product.url}            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;