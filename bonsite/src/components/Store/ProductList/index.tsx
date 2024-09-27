"use client";

const products = [
  {
    id: 1,
    name: 'Pitanga',
    href: '#',
    imageSrc: 'https://lh6.googleusercontent.com/be99KGVYOn7PhgD4ipKmQiJSP_pYXi8PjlgPcrOXfcSFaXYIITJdQUsyGkPD_efb-5uMwGAP8awwY1hkHx99o_mSPF4bPW4QMxywMYG8ylwjfLWl-E16-3tQpP30oXsJ1DXHlW7-',
    imageAlt: "Bonsai de Pitanga",
    price: 'R$129.99',
    categoria: 'Frutifera',
  },
  {
    id: 2,
    name: 'Limao',
    href: '#',
    imageSrc: 'https://cf.shopee.com.br/file/5cfe0adee44e8bd2d28ce1e9f5d7c5b7',
    imageAlt: "Bonsai de Limao",
    price: 'R$89.99',
    categoria: 'Frutifera',
  },
  {
    id: 3,
    name: 'Ameixa Amarela',
    href: '#',
    imageSrc: 'https://bonsaibark.com/wp-content/uploads/berry.jpg',
    imageAlt: "Bonsai de Ameixa Amarela",
    price: 'R$1599.99',
    categoria: 'Frutifera',
  },
  {
    id: 4,
    name: 'Ipe Rosa',
    href: '#',
    imageSrc: 'https://mozartfaggima.wordpress.com/wp-content/uploads/2011/08/bonsai.jpg',
    imageAlt: "Bonsai de Ipe Rosa",
    price: 'R$549.99',
    categoria: 'Florifera',
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