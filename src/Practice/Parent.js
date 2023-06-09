import React, { useState } from 'react'
import ChildCompo from './ChildCompo'

const Parent = () => {
    const [counter, setCounter] = useState(0)

    const callBack = (valueFromChild) => {
        setCounter(valueFromChild)
    }

    return (
        <div><p>{counter}</p>
            <ChildCompo callbackFun={callBack} childCounter={counter} />
        </div>


    )
}

export default Parent