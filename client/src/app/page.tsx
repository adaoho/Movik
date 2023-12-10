import BannerComponent from "@/components/BannerComponent";
import CardHome from "@/components/CardHome";
import CaraouselMT from "@/components/CarouselMT";
import CategoryBar from "@/components/CategoryBar";
import FooterComp from "@/components/FooterComp";
import NavbarComp from "@/components/NavbarComp";
import { fetchProduct } from "@/lib/serverFunction";

export default async function Home() {
  const product = await fetchProduct(1, 12);

  return (
    <>
      <NavbarComp />
      <div className="flex h-[650px] flex-col items-center justify-end -mb-[5%] bg-gray-100 relative">
        <CaraouselMT />
      </div>
      <CategoryBar />

      {/* Card Section */}
      <div className="flex flex-col w-screen bg-gray-100 items-center h-[660px] py-12">
        <div className="flex flex-col text-black h-[12%] items-center justify-center">
          <h1 className="text-[30px] font-bold">Only The Best from The Best</h1>
          <h1>Just For You</h1>
        </div>
        <div className="overflow-x-auto flex flex-row w-[86%] h-[80%] items-start justify-start pl-4 py-5">
          {/* card */}
          <div className="flex h-full gap-x-4">
            {product.map((product, index) => (
              <CardHome key={product._id} product={product} />
            ))}
          </div>
        </div>

        <div className="flex flex-row p-2 items-center justify-center h-[10%] mt-5">
          <div className="gap-x-2 flex flex-row border-[1.5px] border-gray-600 w-[220px] h-[45px] items-center justify-center rounded-lg text-gray-600 hover:bg-orange-900 hover:border-0 hover:text-white transition-all hover:scale-105">
            <span
              className="material-symbols-outlined text-2xl"
              style={{ fontSize: 22, fontWeight: 20 }}
            >
              add_circle
            </span>
            <p>See All</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-screen bg-gray-100 h-[300px] items-center justify-start ">
        <BannerComponent />
      </div>

      <FooterComp />
    </>
  );
}
