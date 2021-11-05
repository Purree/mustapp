import React from 'react';

const If = ({ condition, style, children}) => {
    if(condition) {
        return <>{children}</>
    } else {
        return <></>
    }
}

export default If;
