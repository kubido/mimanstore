import React from 'react'
import { Link } from 'gatsby'

export const Button = (props) => (
  <button {...props} className="my-1 focus:outline-none text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">{props.children}</button>
)

export const ButtonLink = (props) => (
  <Link {...props} className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"> { props.children} </Link>
)

export const ArrowDown = ({ isOpen }) => (
  <svg fill="currentColor" viewBox="0 0 20 20" className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 rotate-0 ${isOpen ? "rotate-180" : "rotate-0"}`}>
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
)