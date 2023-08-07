import React from 'react'

export default function SetCount(props) {


    const increaseCounter = function() {
        props.setCount(props.count + 1)
    }

    const decreaseCounter = function() {
        props.setCount(props.count - 1)
    }
    

  return (
    <div>
        <button onClick={increaseCounter}>Increment +</button>
        <button onClick={decreaseCounter}>Decrement -</button>
    </div>
  )
}
