import { useContext } from "react";
import { ShoppinCartContext } from "../Context";

const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail } = useContext(ShoppinCartContext);
  return (
    <aside
      className={ isProductDetailOpen ?
        'flex flex-col fixed right-0 border bg-white border-black rounded-lg top-[80]  w-[360px] h-[calc(100vh-100px)]' 
          :
        'hidden'
      }>
        <div className="flex justify-between items-center p-6">
            <h2 className="font-medium text-xl">Detail</h2>
            <div onClick={closeProductDetail}>
              <svg className="h-6 w-6 text-blue-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>

            </div>
        </div>
    </aside>
  )
}

export { ProductDetail };
