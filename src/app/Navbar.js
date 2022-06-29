import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="flex justify-between ">
          <div className="flex ml-6 mt-3 ">
            <Link to="/" className="hover:text-white hover:bg-[#926bcf]">
              Posts
            </Link>
          </div>
        </div>
      </section>
    </nav>
  )
}
