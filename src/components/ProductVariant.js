import React from 'react'

const ProductVariant = () => {
  return (
    <div className="mt-3">
      <label aria-label="color label" className="text-gray-700 text-sm" htmlFor="count">Color:</label>
      <div className="flex items-center mt-1">
        <button aria-label="blue" className="h-5 w-5 rounded-full bg-blue-600 border-2 border-blue-200 mr-2 focus:outline-none" />
        <button aria-label="teal" className="h-5 w-5 rounded-full bg-teal-600 mr-2 focus:outline-none" />
        <button aria-label="pink" className="h-5 w-5 rounded-full bg-pink-600 mr-2 focus:outline-none" />
      </div>
    </div>
  )
}

export default ProductVariant

