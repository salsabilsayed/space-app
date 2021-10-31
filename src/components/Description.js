
import React from 'react';

const Description = (props) => {
    return (
        <p className="text-blueGray my-5">
            {props.children}
        </p>
    )
}

export default Description;