'use client'

import { useState, useEffect } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

// Define the types for your product and breadcrumb
interface Breadcrumb {
  id: string;
  href: string;
  name: string;
}

interface Product {
  breadcrumbs: Breadcrumb[];
  href: string;
  nome: string;
  preco: number;
  descricao: string;
  sol: string;
  sol_desc: string;
  agua: string;
  agua_desc: string;
  tamanho: string;
  tamanho_desc: string;
  poda: string;
  poda_desc: string;
  solo: string;
  solo_desc: string;
  delicadeza: string;
  delicadeza_desc: string;
  cores: string[];
  tamanhos: string[];
}

interface ExampleProps {
  params: {
    produtoURL: string; // Updated to reflect the route
  };
}

export default function Example({ params }: ExampleProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const url = params.produtoURL; // Extract URL from params
  const imagePath = 'https://thumbs.dreamstime.com/z/%C3%A1rvore-de-cereja-da-argila-bonsai-feito-m%C3%A3o-81687889.jpg'; // Hardcoded image path

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`/api/store/fetchbonsai/url/${url}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data: Product = await response.json();
        setProduct(data);
        setSelectedColor(data.cores[0]); // Set the first color as default
        setSelectedSize(data.tamanhos[2]); // Set the third size as default
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }

    fetchProduct();
  }, [url]);

  if (!product) return <div>Loading...</div>; // Loading state

  const reviews = { href: '#', average: 4, totalCount: 2 }; // Example reviews

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product?.breadcrumbs?.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            )) || (
              <li className="text-sm">
                <span className="font-medium text-gray-500">Loading...</span>
              </li>
            )}
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="w-full max-w-md mx-auto">
            <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows autoPlay>
              <div>
                <img alt={product.nome} src={imagePath} className="h-full w-full object-cover object-center" />
              </div>
              <div>
                <img alt={product.nome} src={imagePath} className="h-full w-full object-cover object-center" />
              </div>
              <div>
                <img alt={product.nome} src={imagePath} className="h-full w-full object-cover object-center" />
              </div>
            </Carousel>
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.nome}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Informações</h2>
            <p className="text-3xl tracking-tight text-gray-900">{`R$${product.preco}`}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0',
                      )}
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Adicionar ao carrinho
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Descrição</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.descricao}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Características</h3>
              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {[
                    `Sol: ${product.sol} - ${product.sol_desc}`,
                    `Água: ${product.agua} - ${product.agua_desc}`,
                    `Tamanho: ${product.tamanho} - ${product.tamanho_desc}`,
                    `Poda: ${product.poda} - ${product.poda_desc}`,
                    `Solo: ${product.solo} - ${product.solo_desc}`,
                    `Delicadeza: ${product.delicadeza} - ${product.delicadeza_desc}`,
                  ].map((highlight, index) => (
                    <li key={index} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}