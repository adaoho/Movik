"use client";
import { ProductType, ProductsPageType } from "@/defs/TypeDefs";
import { currencyFormatted } from "@/lib/serverFunction";
import Link from "next/link";

const CardHome = ({ product }: { product: ProductsPageType }) => {
  return (
    <>
      <div className="flex flex-col bg-white w-[235px] h-full rounded-lg shadow-lg relative overflow-hidden hover:scale-105 transition-all justify-between pb-2">
        <div className="flex h-[70%] w-full overflow-hidden items-center justify-center p-[5%] -mb-[5%] rounded-lg">
          {/* Picture of The Card */}
          <div className="w-full h-full overflow-hidden rounded-lg">
            <Link href={`/products/${product.slug}`}>
              <img
                src={product.images[0]}
                className="object-cover rounded-lg"
              />
            </Link>
          </div>
        </div>
        {/* Title Card */}
        <div className="flex flex-col w-full px-[7%] pt-4 gap-y-1">
          <p className="text-gray-800 font-bold">{product.name}</p>
          <p className="text-[11px] text-gray-500">
            Temui Minor III dan rasakan suara khas Marshall tanpa kekacauan
          </p>
        </div>
        {/* Price Tag */}
        <div className="flex flex-row w-full h-[10%] justify-between items-center px-[7%] pt-[2%] pb-[3%]">
          <p className="font-bold text-gray-700">
            {currencyFormatted(+product.price)}
          </p>
          {/* Upload Time */}
          <div className="flex flex-row text-gray-600 gap-x-1 h-full items-center">
            <span
              className="material-symbols-outlined text-2xl"
              style={{ fontSize: 15 }}
            >
              schedule
            </span>
            <p className="text-[12px]">3h ago</p>
          </div>
        </div>

        <Link href={"/wishlist"}>
          <div className="flex w-full justify-center items-center h-full pb-2 mt-2 z-10">
            <div className="flex w-[92%] h-full bg-gray-900 items-center justify-center rounded-md flex-row gap-x-1 hover:bg-orange-900 transition-all">
              <span
                className="material-symbols-outlined text-2xl"
                style={{ fontSize: 18, fontWeight: 20 }}
              >
                shopping_bag
              </span>
              <p className="text-[13px]">Buy Now</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CardHome;
