import React from 'react'
import DiscordIcon from '../../assets/svgs/DiscordIcon'
import InstagramIcon from '../../assets/svgs/InstagramIcon'
import LinkIcon from '../../assets/svgs/LinkIcon'
import TwitterIcon from '../../assets/svgs/TwitterIcon'
import Accordian from './Accordian'

function LeftAccordian({open}) {
    return (
        <Accordian open={open}>
                <div className={"w-10/12 text-white "}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              </div>
              <div class="grid grid-cols-2 gap-4 w-3/5 mt-9 linkGrid">
              <div class="inline-flex items-center ">
              <LinkIcon/>
              <span className={"ml-5 iconLinkColor hidden md:block"}>Loren Ipsum</span>

              </div>
              <div class="inline-flex items-center ">
              <DiscordIcon/>

              <span className={"ml-5 iconLinkColor hidden md:block"}>Loren Ipsum</span>

              </div>

            </div>

            <div class="grid grid-cols-2 gap-4 w-3/5 mt-5 linkGrid">
              <div class="inline-flex items-center ">
              

              <InstagramIcon/>
              <span className={"ml-5 iconLinkColor hidden md:block"}>Loren Ipsum</span>

              </div>
              <div class="inline-flex items-center ">
              <TwitterIcon/>
              <span className={"ml-5 hidden md:block"}>Loren Ipsum</span>

              </div>

            </div>
        </Accordian>
    )
}

export default LeftAccordian
