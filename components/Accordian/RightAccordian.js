import React from 'react'
import Accordian from './Accordian'

function RightAccordian({open}) {
    return (
        <Accordian open={open}>
            <div className={"grid  grid-cols-2 md:grid-cols-3 gap-2 gridContainer"}>
            
            {[...Array(12)].map((val,key)=>{
                return(
                    <div className={"w-full flex flex-col justify-center items-center pb-4 pt-4 bg-black rounded"}>
                    <p className={"text-xs leading-6 text-gray-600"}>Accessories & Ears</p>
                    <h3 className={"font-bold"}>Lorem Ipsum</h3>
                    <p className={"text-xs leading-6 text-gray-600"}>9%</p>
                </div>
                )
            })}
           
           
            </div>
        </Accordian>
    )
}

export default RightAccordian
