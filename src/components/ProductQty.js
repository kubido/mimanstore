import React from 'react'
import { useState } from 'react'

const ProductQty = () => {
  const [count, setCount] = useState(1)

  const countHandler = (direction) => {
    if (direction === "INC" && count < 100) setCount(count + 1)
    if (direction === "DEC" && count > 0) setCount(count - 1)
  }

  return (
    <div className="mt-2">
      <label aria-label="count" className="text-gray-700 text-sm" htmlFor="count">Quantity:</label>
      <div className="flex items-center mt-1">
        <button
          aria-label="decrement"
          onClick={() => countHandler('DEC')}
          className="text-gray-500 focus:outline-none focus:text-gray-600">
          <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </button>
        <span className="text-gray-700 text-lg mx-2">{count}</span>
        <button
          aria-label="increment"
          onClick={() => countHandler('INC')}
          className="text-gray-500 focus:outline-none focus:text-gray-600">
          <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>

        </button>
      </div>
    </div>
  )
}

export default ProductQty