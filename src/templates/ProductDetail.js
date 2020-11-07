import React from 'react'
import { Header, ProductQty, ProductVariant } from "../components"

const Product = ({ pageContext }) => {
  const { product: {
    title,
    caption,
    displayUrl,
  } } = pageContext

  const hashtagMatcher = /(?:^|\s)(?:#)([a-zA-Z\d]+)/gm;
  let hashtags = caption.match(hashtagMatcher)

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
                <h3 className="text-gray-700 uppercase text-xl">{title}</h3>
                <span className="text-gray-500 mt-3 text-lg">Rp. 125.000</span>
                <hr className="my-3" />


                <ProductQty />
                <ProductVariant />

                <div className="flex items-center mt-6">
                  <button className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Order Now</button>
                </div>

                <hr className="my-10" />
                <div className="pb-2">
                  {hashtags.map(tag => (
                    <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                  ))}
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