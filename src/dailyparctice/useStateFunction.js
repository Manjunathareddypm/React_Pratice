import React, { Component, useState } from 'react'

//  class UseStateFunction extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          count:0
//       }
//     }

//     increment=()=>{
//     this.setState({
//         count: this.state.count +1
//     })
//     }  
//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.increment}>count</button>
//       </div>
//     )
//   }
// }


// function UseStateFunction() {
//     const [count, setCount] = useState(0)

//     const submit = () => {
//         setCount(count + 1)
//     }
//   return (
//     <div>
//         <button onClick={submit}>Count</button>
//     </div>
//   )
// }


function UseStateFunction() {
    let a =0
    const [count, setCount]= useState(a)
    const submit = ()=>{
        setCount(a )
    }
    const submit1 = ()=>{
        setCount((previse)=>
                previse +  1
        )
    }
    const submit2 = ()=>{
        setCount((previse)=>
                previse - 1
        )
    }

  return (
    <div>
        {count}
        <button onClick={submit}>click</button>
        <button onClick={submit1}>click</button>
        <button onClick={submit2}>click</button>
    </div>
  )
}



export default UseStateFunction