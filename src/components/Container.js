import React from 'react';

const Container = props => {
    return (
        <div className="w-11/12 lg:w-9/12 text-center lg:text-left">
            {props.children}
        </div>
    )
}

export default Container;
