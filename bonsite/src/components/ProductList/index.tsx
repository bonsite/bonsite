"use client";

const products = [
  {
    id: 1,
    name: 'Pitanga',
    href: '#',
    imageSrc: 'https://images.tcdn.com.br/img/img_prod/947008/bonsai_pitanga_6_anos_30_cm_7565_1_2daedb4cb6416f3980bcc7ae781b1b31.jpeg',
    imageAlt: "Bonsai de Pitanga",
    price: 'R$129.99',
    categoria: 'Frutifera',
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