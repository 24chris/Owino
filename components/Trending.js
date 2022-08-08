import Link from "next/link";
import Image from "next/image";

export default function Trending({ trends }) {
  const Trends = trends.products.slice(0, 6);

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto py-0 px-4 sm:py-0 sm:px-6">
          <div className="pt-10 pb-6 flex flex-col items-center">
            <h2 className="text-4xl mb-3">Trending</h2>
            <p className="text-gray-600 text-sm"></p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-1 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-4">
            {Trends.map((Trend) => (
              <Link
                key={Trend.id}
                href={`product${encodeURI(Trend.get_absolute_url)}`}
                as={`product${encodeURI(Trend.get_absolute_url)}`}
              >
                <a>
                  <div className="pt-0 pr-0 pb-1 pl-0">
                    <div className="relative border-solid border-grey border-2 rounded-md p-2">
                      <div className="relative aspect-w-1 aspect-h-1 sm:aspect-w-1 sm:aspect-h-1">
                      <Image
                        src={Trend.get_image}
                        alt={Trend.imageAlt}
                        layout="fill"
                        // width={219}
                        // height={187}
                        className="absolute top-0 left-0 bottom-0 right-0 max-w-full max-h-full z-10 object-contain"
                      />
                      </div>
                    <div className="h-20 mt-2 mx-0 mb-0 text-center whitespace-normal">
                      <div className="text-sm h-10 mt-0 mx-0 mb-3 font-normal overflow-hidden">
                          {Trend.name}
                      </div>
                      <p className="text-red-500 text-base font-bold m-0">
                          UGX {Trend.price.toLocaleString()}
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
    </>
  );
}
