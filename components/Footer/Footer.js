import React from 'react'
import Image from 'next/image'

import FooterLogo from '../../assets/images/footerLogo.png'

function Footer() {
    return (
        <div className={"footer"}>
            <Image src={FooterLogo} alt={"Logo"}/>
        </div>
    )
}

export default Footer
