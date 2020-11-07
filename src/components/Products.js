import React from "react"
import { Link } from 'gatsby'

const Products = ({ products }) => {
  const hashtagMatcher = /(?:^|\s)(?:#)([a-zA-Z\d]+)/gm;

  return (
    <>
      {
        products.map(({ path, id, title, caption, displayUrl }) => {
          let hashtags = caption.match(hashtagMatcher)
          return (
            <Link className="w-1/3 mb-8 pt-5 pb-8 px-5" key={id} to={path}>

              <div className="max-w-sm rounded overflow-hidden shadow-lg  border border-gray-300">
                <div className="relative pb-11/12 bg-red ">
                  {/* <img className="absolute h-full w-full object-cover" :src="property.imageUrl" :alt="property.imageAlt"> */}
                  <img className="absolute h-full w-full object-cover border-b border-gray-300" src={displayUrl} alt={title} />
                  {/* <img className="w-full border-b border-gray-300" src={displayUrl} alt={title} /> */}
                </div>

                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{title}</div>
                  {/* <pre className="text-gray-700 text-base" > {caption.replace(hashtagMatcher, "")}</pre> */}
                </div>
                {/* <div className="px-6 pt-4 pb-2">
                {hashtags.map(tag => (
                  <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                ))}
              </div> */}
              </div>
            </Link>
          )
        })
      }
    </>
  )
}

export default Products