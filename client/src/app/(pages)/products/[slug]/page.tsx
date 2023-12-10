import BannerComponent from "@/components/BannerComponent";
import FooterComp from "@/components/FooterComp";
import NavbarComp from "@/components/NavbarComp";
import Link from "next/link";
import CardHome from "@/components/CardHome";
import {
  currencyFormatted,
  fetchProduct,
  fetchProductBySlug,
} from "@/lib/serverFunction";

// Halaman Product Fetchingnya dengan SSR
// Komponen Add To Wishlistnya dengan CSR
// Fitur: Add to Wishlist

export default async function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const products = await fetchProduct(8, 17);
  const productDataDetail = await fetchProductBySlug(params.slug);

  return (
    <>
      <NavbarComp />
      <section
        id="emptySection"
        className="w-screen h-[120px] bg-gray-100"
      ></section>

      {/* Main Section */}
      <div className="flex flex-row w-screen h-[550px] bg-gray-100 relative px-[10%] gap-x-4">
        {/* Left Component */}
        <div className="flex flex-row justify-start gap-x-5 w-[65%] h-full relative rounded-sm text-gray-700">
          <div className="flex flex-col w-[20%] h-full overflow-y-auto">
            <div className="flex flex-col w-full h-full gap-y-3">
              {productDataDetail.images.map((product, index) => (
                <img
                  key={`product.${index}`}
                  src={product}
                  className="object-cover w-full h-[35%] rounded-md"
                />
              ))}
            </div>
          </div>

          <img
            src={productDataDetail.thumbnail[0]}
            className="object-cover w-[75%] h-full rounded-md"
          />
        </div>

        {/* Right Component */}
        <div className="flex text-gray-800 flex-col w-[35%] h-full relative items-center justify-center ">
          <div className="gap-y-2 flex flex-col w-full h-full justify-between items-start">
            <div className="flex flex-col h-full w-full justify-start items-start">
              <p className="text-[40px] font-bold leading-10 w-full">
                {productDataDetail.name}
              </p>
              <h1 className="text-[30px] font-bold text-orange-900 h-[12%] justify-center items-start w-full mt-[5%]">
                {currencyFormatted(+productDataDetail.price)},-
              </h1>

              <div className="flex flex-col w-full h-[6%] gap-y-2 mt-[5%]">
                <p className="text-sm font-bold">Product Information</p>
                <div className="divider bg-gray-900 -mt-1 h-[0.5px]"></div>
              </div>

              <div className="w-full h-[40%] mt-[3%] flex flex-col gap-y-7">
                <p className="text-sm ">{productDataDetail.description}</p>
                <div className="flex flex-row flex-wrap w-full gap-x-1 gap-y-1 text-[12px] items-center text-gray-600">
                  {productDataDetail.tags.map((product) => (
                    <p
                      key={product + "id"}
                      className="flex justify-center items-center px-4 py-1 border-[1.5px] bg-orange-900 rounded-lg text-white"
                    >
                      {product}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-row w-full h-[10%] justify-start items-end gap-x-2">
              <Link
                href={"/products"}
                className="flex flex-row items-center justify-center h-full w-full"
              >
                <div className="gap-x-2 flex flex-row border-[1.5px] border-gray-600 w-full h-[45px] items-center justify-center rounded-lg text-gray-600 hover:bg-orange-900 hover:border-0 hover:text-white transition-all hover:scale-105">
                  <span
                    className="material-symbols-outlined text-2xl"
                    style={{ fontSize: 22, fontWeight: 20 }}
                  >
                    add_circle
                  </span>
                  <p>Add To Wishlist</p>
                </div>
              </Link>
              <Link
                href={"/products"}
                className="flex flex-row items-center justify-center h-full w-full"
              >
                <div className="gap-x-2 flex flex-row border-[1.5px] border-gray-600 w-full h-[45px] items-center justify-center rounded-lg text-gray-600 hover:bg-orange-900 hover:border-0 hover:text-white transition-all hover:scale-105">
                  <span
                    className="material-symbols-outlined text-2xl"
                    style={{ fontSize: 22, fontWeight: 20 }}
                  >
                    add_circle
                  </span>
                  <p>Another Product</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="flex flex-col w-screen bg-gray-100 items-center h-[660px] py-12">
        <div className="flex flex-col text-black h-[12%] items-center justify-center">
          <h1 className="text-[30px] font-bold">See Another Product</h1>
          <h1>Just For You</h1>
        </div>
        <div className="overflow-x-auto flex flex-row w-[83%] h-[80%] items-start justify-start pl-4 py-5">
          {/* card */}
          <div className="flex h-full gap-x-5">
            {products.map((product, index) => (
              <CardHome key={product._id} product={product} />
            ))}
          </div>
        </div>

        <Link
          href={"/products"}
          className="flex flex-row p-2 items-center justify-center h-[10%] mt-5"
        >
          <div className="gap-x-2 flex flex-row border-[1.5px] border-gray-600 w-[220px] h-[45px] items-center justify-center rounded-lg text-gray-600 hover:bg-orange-900 hover:border-0 hover:text-white transition-all hover:scale-105">
            <span
              className="material-symbols-outlined text-2xl"
              style={{ fontSize: 22, fontWeight: 20 }}
            >
              add_circle
            </span>
            <p>See All</p>
          </div>
        </Link>
      </div>

      <div className="flex flex-col w-screen bg-gray-100 h-[300px] items-center justify-start ">
        <BannerComponent />
      </div>

      <FooterComp />
    </>
  );
}
