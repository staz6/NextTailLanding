import React from 'react'

function AboutButton({title,icon}) {
    return (
        <button class=" buttonColor font-bold py-3 px-7 rounded inline-flex items-center cursor:pointer">
          {icon}
          <span className="ml-2">{title}</span>
        </button>
    )
}

export default AboutButton
