import React from 'react'
import Image from 'next/image'
import Logo from '../../assets/images/logo.png'

function Navbar() {
    return (
        <div className={"navbar w-full h-24 bg-black flex justify-between items-center gap-4"}>
        <Image
        src={Logo}
        alt="Logo"
      />
        <div className={"justify-end flex items-center w-3/5 gap-4"}>
          <div class="hidden relative sm:flex flex-1" >
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input type="search" id="search" class="searchField block p-2 pl-10 w-full text-sm " placeholder="Loren Ipsum" required />
          </div>
          <a className={"text-white cursor-pointer"}>
            Loren
          </a>
          <a className={"text-white cursor-pointer"}>
            Loren
          </a>
          <a className={"text-white cursor-pointer"}>
            Loren
          </a>
          
        </div>
        </div>
    )
}

export default Navbar
