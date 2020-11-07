import React from "react"
import { Link } from 'gatsby'

const Products = ({ products }) => {
  return (
    <>
      {
        products.map(({ path, id, title, caption, displayUrl }) => {
          return (
            <Link className="w-full lg:mb-8 pt-5 pb-8 lg:w-1/3  lg:px-5" key={id} to={path}>

              <div className="lg:max-w-sm rounded overflow-hidden shadow-lg  border border-gray-300">
                <div className="relative pb-11/12 bg-red ">
                  {/* <img className="absolute h-full w-full object-cover" :src="property.imageUrl" :alt="property.imageAlt"> */}
                  <img className="absolute h-full w-full object-cover border-b border-gray-300" src={displayUrl} alt={title} />
                  {/* <img className="w-full border-b border-gray-300" src={displayUrl} alt={title} /> */}
                </div>

                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{title}</div>
                  {/* <pre className="text-gray-700 text-base" > {caption.replace(hashtagMatcher, "")}</pre> */}
                </div>

              </div>
            </Link>
          )
        })
      }
    </>
  )
}

export default Products