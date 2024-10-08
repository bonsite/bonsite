"use client";

const products = [
  {
    id: 1,
    name: 'Pitanga',
    href: '#',
    imageSrc: 'https://bonsaidocampo.com.br/wp-content/uploads/2024/05/51838__a-Resolucao-da-Area-de-Trabalho-324x324.jpg',
    imageAlt: "Bonsai de Pitanga",
    price: 'R$129.99',
    categoria: 'Frutifera',
  },
  {
    id: 2,
    name: 'Cereja',
    href: '#',
    imageSrc: 'https://bonsaidocampo.com.br/wp-content/uploads/2024/05/52663_a-Resolucao-da-Area-de-Trabalho-324x324.jpg',
    imageAlt: "Bonsai de Cereja",
    price: 'R$899.99',
    categoria: 'Frutifera',
  },
  {
    id: 3,
    name: 'Jabuticaba',
    href: '#',
    imageSrc: 'https://bonsaidocampo.com.br/wp-content/uploads/2024/06/Jabuticaba-a-Resolucao-da-Area-de-Trabalho-324x324.jpg',
    imageAlt: "Bonsai de Jabuticaba",
    price: 'R$1599.99',
    categoria: 'Frutifera',
  },
  {
    id: 4,
    name: 'Loropetalum Rubrum',
    href: '#',
    imageSrc: 'https://bonsaidocampo.com.br/wp-content/uploads/2024/05/52681_a-Resolucao-da-Area-de-Trabalho-324x324.jpg',
    imageAlt: "Bonsai de Loropetalum Rubrum",
    price: 'R$249.99',
    categoria: 'Florifera',
  },
  {
    id: 5,
    name: 'Maçã',
    href: '#',
    imageSrc: 'https://bonsaidocampo.com.br/wp-content/uploads/2023/11/macieira-501129_A-Resolucao-da-Area-de-Trabalho-324x324.jpg',
    imageAlt: "Bonsai de Maca",
    price: 'R$129.99',
    categoria: 'Frutifera',
  },
  {
    id: 6,
    name: 'Serissa',
    href: '#',
    imageSrc: 'https://bonsaidocampo.com.br/wp-content/uploads/2024/05/52676_a-Resolucao-da-Area-de-Trabalho-1-324x324.jpg',
    imageAlt: "Bonsai de Serissa",
    price: 'R$789.99',
    categoria: 'Florifera',
  },
  {
    id: 7,
    name: 'Caliandra Branca',
    href: '#',
    imageSrc: 'https://bonsaidocampo.com.br/wp-content/uploads/2024/06/caliandra-4b-Resolucao-da-Area-de-Trabalho-324x324.jpg',
    imageAlt: "Bonsai de Caliandra Branca",
    price: 'R$1099.50',
    categoria: 'Florifera',
  },
  {
    id: 8,
    name: 'Podocarpo',
    href: '#',
    imageSrc: 'https://bonsaidocampo.com.br/wp-content/uploads/2024/05/52078__a-Resolucao-da-Area-de-Trabalho-324x324.jpg',
    imageAlt: "Bonsai de Podocarpo",
    price: 'R$349.99',
    categoria: 'Perene',
  },
  {
    id: 9,
    name: 'Mini Jacare',
    href: '#',
    imageSrc: 'https://bonsaidocampo.com.br/wp-content/uploads/2024/06/jacare-mini-_03-Resolucao-da-Area-de-Trabalho-324x324.jpg',
    imageAlt: "Bonsai de Mini Jacare",
    price: 'R$8999.99',
    categoria: 'Perene',
  },
  {
    id: 10,
    name: 'Ficus Microcarpa',
    href: '#',
    imageSrc: 'https://bonsaidocampo.com.br/wp-content/uploads/2024/08/Ficus1-a-Resolucao-da-Area-de-Trabalho-324x324.jpg',
    imageAlt: "Bonsai de Ficus Microcarpa",
    price: 'R$8999.99',
    categoria: 'Perene',
  },
  // other bonsais
]

export default function Product(){
    
    return <>
    
    <div className="bg-white">

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">


          {products.map((product) => (

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
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.categoria}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
              
            </div>
          
          ))}


        </div>
      </div>
    </div>
    
    </>
}