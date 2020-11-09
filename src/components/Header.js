import React from 'react'
import { Link } from 'gatsby'
import { useState } from 'react'

import { Button, ButtonLink, ArrowDown } from './Atoms'
import { useClickOutsideListener } from '../hooks'
import { useRef } from 'react'

const ButtonDropdown = ({ label, dropdowns }) => {
  const node = useRef()
  const [isOpen, setIsOpen] = useState(false)

  useClickOutsideListener(node, {
    outsideClick: () => setIsOpen(false)
  })

  return (
    <div className="relative z-10" ref={node} >
      <Button onClick={() => setIsOpen(!isOpen)}>
        {label}
        <ArrowDown isOpen={isOpen} />
      </Button>
      {isOpen && <div className="md:absolute md:top-20 right-0 md:mt-2 md:py-2 w-48 bg-white rounded-lg md:shadow-xl">
        {dropdowns.map(({ path, label }) => <ButtonLink key={path} to={path}> {label} </ButtonLink>)}
      </div>
      }
    </div>
  )
}

const Header = () => {

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700"> Mimanstore</Link>
          </div>

          <div className="flex md:hidden">
            <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="md:flex items-center">
          <div className="flex flex-col md:flex-row md:mx-6">
            <ButtonDropdown
              label="Piyama"
              dropdowns={[
                { label: "Piyama pendek", path: "/piyama-pendek" },
                { label: "Piyama panjang", path: "/piyama-panjang" },
              ]}
            />

            <ButtonDropdown
              label="Daily Wear"
              dropdowns={[
                { label: "Piyama pendek", path: "/piyama-pendek" },
                { label: "Piyama panjang", path: "/piyama-panjang" },
              ]}
            />
            <div className="relative z-10">
              <Button>Summer</Button>

            </div>


          </div >
        </div >
      </div >
    </nav >
  )
}




export default Header