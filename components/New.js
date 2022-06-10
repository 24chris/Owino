import Link from "next/link";
import Image from "next/image";

export default function New({ newgoodies }) {

  const  newbeies = newgoodies.products.slice(0,6)
  console.log("data for new items", newbeies)

  
  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-0 px-4 sm:py-0 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="pt-10 pb-6 flex flex-col items-center">
            <h2 className="text-4xl mb-3">New Arrivals</h2>
            <p className="text-gray-600 text-sm"></p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
            {newbeies.map((newbie) => (
              <Link key={newbie.id} href={`product/${encodeURIComponent(newbie.get_absolute_url)}`} as={`product/${encodeURIComponent(newbie.get_absolute_url)}`}>
              <a>
              <div
                
                className="group relative transform hover:translate-y-2 hover:shadow-xl transition duration-300"
              >
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md lg:h-40 lg:aspect-none">
                  <Image
                    src={newbie.get_image}
                    alt={newbie.imageAlt}
                    // className="w-full h-full object-center object-cover lg:w-full lg:h-full" old sizing
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    height={192}
                    width={200}
                  />
                </div>
                <div className="overflow-hidden font-semibold text-base text-center mt-6">
                  <div>
                    <h3 className=" ">
                      
                        <span aria-hidden="true" className="" />
                        {newbie.name}
                    
                    </h3>
                    <p className="mt-3 pl-8 text-xl  text-red-500 ">
                      UGX {newbie.price.toLocaleString()}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900 "></p>
                </div>
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
