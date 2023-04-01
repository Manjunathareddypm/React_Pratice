import React,{useState} from 'react'
import Child1 from './Child1'


function Parent1() {
    const [text, setText] = useState("");

    const chageColor = (event) =>{
        setText(event.target.value)
    }
  return (
    <div style={{border:"1px solid black",  height:"5%", width:"100%"}}>
        <input type='text' value={text} onChange={chageColor}/>
        <Child1 color={text === 'hello' ? "green": "black"} />
    </div>
  )
}

export default Parent1