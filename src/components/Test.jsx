import React, { useState } from 'react'

 function Test() {
    const [objName, setName] = useState({firstName:'abc', lastName:'def'})

    const submit = () => {
        setName({firstName:'cba', lastName:'fed'})
    }

  return (
   <div>
    <p>{objName.firstName}</p>
    <p>{objName.lastName}</p>
    <button onClick={submit}>Click</button>
   </div> 
  )
}
 export default Test