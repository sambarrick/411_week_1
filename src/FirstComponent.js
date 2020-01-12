import React from 'react';

function FirstComponent(props) {
    console.log("This is FirstComp Props", props.items)
    return (
        <h2> h1 text inside FirstComponent.js</h2>
    )
}

export default FirstComponent;