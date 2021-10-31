import React from 'react'

const SubTitle = props => {
    return (
        <h3 className="font-subTitle uppercase text-white 
         md:text-2xl py-12 md:pt-14 md:mt-12 spacing text-center md:text-left">
            {props.children}
        </h3>
    )
}

export default SubTitle;
