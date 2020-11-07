import React from 'react'
import { Header } from "../components"

const Product = ({ pageContext }) => {
  const { product } = pageContext
  return (
    <div>
      <Header />
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="container p-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="flex flex-wrap my-5">
              <pre>{JSON.stringify(product, null, 2)}</pre>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}




export default Product