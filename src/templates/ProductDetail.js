import React from 'react'
import { Header, ProductQty, ProductVariant } from "../components"

const Product = ({ pageContext }) => {
  const { product: {
    id,
    title,
    caption,
    displayUrl,
    images
  } } = pageContext
  return (
    <div>
      <Header />
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="container p-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="flex flex-wrap my-5">
              <div className="shadow-lg w-full md:w-1/2 lg:h-96">
                <img className="h-full w-full rounded-md object-cover mx-auto" src={displayUrl} alt="Nike Air" />
              </div>
              <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                <h3 class="text-gray-700 uppercase text-xl">{title}</h3>
                <span class="text-gray-500 mt-3 text-lg">Rp. 125.000</span>
                <hr class="my-3" />

                <ProductQty />
                <ProductVariant />

                <div class="flex items-center mt-6">
                  <button class="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Order Now</button>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  )
}




export default Product