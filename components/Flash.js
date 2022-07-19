import Link from "next/link";
import Image from "next/image";

export default function Flash({ flash }) {
  const flashs = flash.products.slice(0, 6);
  console.log("data for flash", flash);

  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-0 px-4 sm:py-0 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="pt-10 pb-6 flex flex-col items-center">
            <h2 className="text-4xl mb-3">Flash Deals</h2>
            <p className="text-gray-600 text-sm"></p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
            {flashs.map((flash) => (
              <Link
                key={flash.id}
                // href={`prod${encodeURI(flash.get_absolute_url)}`}
                // as={`prod${encodeURI(flash.get_absolute_url)}`}
                href={`product/${encodeURIComponent(flash.get_absolute_url)}`}
                as={`product/${encodeURIComponent(flash.get_absolute_url)}`}
              >
                <a>
                  <div className="group relative h-full w-full transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                    <div className="aspect-w-3 aspect-h-3 sm:aspect-w-1 sm:aspect-h-1">
                      <Image
                        src={flash.get_image}
                        alt={flash.imageAlt}
                        layout="fill"
                        className="object-cover"
                      />
                    </div>
                    <div className="overflow-hidden font-semibold text-base text-center">
                      <div className="mt-3">
                          {flash.name}
                      </div>
                      <p className="mt-3 pl-8 text-xl  text-red-500 ">
                          UGX {flash.price.toLocaleString()}
                        </p>
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
