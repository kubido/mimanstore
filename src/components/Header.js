import React from 'react'
import { Link } from 'gatsby'
const Header = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg border-b border-gray-200 ">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link to="/" className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase">
                Miman Store
              </Link>

              <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              </button>
            </div>
            <div className="flex lg:flex-grow items-center" id="example-navbar-info">
              <ul className="flex flex-col lg:flex-row list-none ml-auto">
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug hover:opacity-75" href="#pablo">
                    Cart (0)
              </a>

                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header