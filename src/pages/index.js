import React from "react"
import { graphql } from 'gatsby'

import '../css/index.css'

import { Header, Products } from '../components'

export default function Home({ data }) {
  const { allSitePage: { edges } } = data
  let products = edges.map(({ node }) => {
    return Object.assign({ path: node.path }, node.context.product)
  })


  return <>
    <Header />
    <div className="flex flex-wrap">
      <div className="w-full">
        <div className="container p-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="flex flex-wrap my-5">
            <Products products={products} />
          </div>
        </div>

      </div>
    </div>
  </>
}

export const query = graphql`
  query allProducts {
    allSitePage(filter: {path: {regex: "/products/"}}) {
      edges {
        node {
          path
          context {
            product {
              displayUrl
              caption
              title
              id
            }
          }
        }
      }
    }
}
`