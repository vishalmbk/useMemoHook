import React from 'react'

const ChildCompo = (props) => {
    // console.log("child rendered")
    let counterValue = props.childCounter;


    return (
        <div>
            <button onClick={() => props.callbackFun(++counterValue)}>Increment</button>
        </div>

    )
}

export default ChildCompo