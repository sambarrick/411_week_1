import React from 'react';

function FirstComponent(props) {
    console.log("This is FirstComp Props", props.items)
    return (
        <h1> h1 text inside FirstComponent.js</h1>
    )
}

export default FirstComponent;