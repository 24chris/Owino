import Link from "next/link";
import Image from "next/image";
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import HomeSlider from '../components/HomeSlider'
import Top from '../components/Top'

export default function Flash({products}) {
    console.log('products from kids:',products)
  return (
    <>
    <Top/>
     <NavBar/>
    <HomeSlider/>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="pt-10 pb-6 flex flex-col items-center">
          <h2 className="text-4xl mb-3">Flash Deals</h2>
          <p className="text-gray-600 text-sm"></p>
        </div>
          <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
            {products.map((product) => (
              <Link key={product.id} href={`product/${encodeURIComponent(product.get_absolute_url)}`} className="group relative transform hover:translate-y-2 hover:shadow-xl transition duration-300"><a>
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md lg:h-80 lg:aspect-none">
                  <img
                    src={product.get_image}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="overflow-hidden font-semibold text-base text-center mt-6">
                  <div>
                    <h3 className=" ">
                      
                        <span
                          aria-hidden="true"
                          className=""
                        />
                        {product.name}
                      
                    </h3>
                    <p className="mt-3 pl-8 text-xl  text-red-500 ">
                      UGX {product.price.toLocaleString()}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900 "></p>
                </div>
                </a>
              </Link>
              
            ))}
          </div>
          
        </div>
      </div>
    </>
  );
}



export async function getServerSideProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/latest-products/`)
    const products = await res.json()
  
    return {
      props: {
        products,
      },
    }
  }