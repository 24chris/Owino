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
            <h2 className="text-4xl mb-3">New</h2>
            <p className="text-gray-600 text-sm"></p>
          </div>
          {/* <div className="flex flex-grow-0 flex-shrink-0 max-w-full">
            <div className="mx-auto overflow-hidden p-0 z-0 relative">
            <div className="relative w-full h-full flex transition-transform box-content">
              <div className="flex-shrink-0 h-full relative transition-transform bg-white">
              {newbeies.map((newbie) => (
                <Link href={`product/${encodeURIComponent(newbie.get_absolute_url)}`}>
                <a>
                  <div key={newbie.id} className="px-0 pt-0 pb-1 bg-white">
                    <div className="box-content relative border border-solid rounded p-2">
                      <div className="relative box-content pb-3">
                      <img
                        src={newbie.get_image}
                        // alt={women.imageAlt}
                        // className="w-full h-full object-center object-cover lg:w-full lg:h-full" old sizing
                        className="h-auto w-full object-cover absolute top-0 left-0 bottom-0 right-0 max-w-full max-h-full bg-white md:h-full md:w-48"
                      />
                      </div>
                      <div className="h-20 mt-2 text-center whitespace-normal box-content">
                      <div className="text-xs h-10 mb-3 font-normal overflow-hidden box-content">
                      {newbie.name}
                      </div>
                      <p className="bg-red-700 font-bold text-xs">
                      UGX {newbie.price.toLocaleString()}
                      </p>
                      </div>
                    </div>
                  </div>
                </a>
                </Link>
                 ))}
              </div>
            </div>
            </div>
          </div> */}
          <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
            {newbeies.map((newbie) => (
              <Link key={newbie.id} href={`product/${encodeURIComponent(newbie.get_absolute_url)}`}>
              <a>
              <div
                
                className="group relative transform hover:translate-y-2 hover:shadow-xl transition duration-300"
              >
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md lg:h-40 lg:aspect-none">
                  <img
                    src={newbie.get_image}
                    // alt={women.imageAlt}
                    // className="w-full h-full object-center object-cover lg:w-full lg:h-full" old sizing
                    className="h-48 w-full object-cover md:h-full md:w-48"
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
