import React, { useState, useEffect } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState([10,20,30,40]);

    useEffect(()=>{
        document.title = `you clicked  ${count} times`
    })

    const submit = () => {
        setCount(previse => previse[0] + 1) 
        }
  return (
    <div>
        <p>{count}</p>
        <button onClick={submit}>Click</button>
    </div>
  )
}
export default  HookCounterOne