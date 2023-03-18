// import React, { Component, useState } from 'react'

//  class Counter1 extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          count: 0
//       }
//     }
//     increment(){
//         this.setState({count: this.state.count+1})
//     }
//   render() {
//     return (
//       <div
//       >Counter count - {this.state.count}
// <button onClick={()=>this.increment()}>count</button>
//       </div>
//     )
//   }
// }

// function Counter1(){
//   const [state, setstate] = useState(0)
//   const submit = () =>{
//     setstate(state + 1)
//   }
//   return(
//     <div>{state}
//     <button onClick={submit}>Click</button>
//     </div>
    
//   )
// }

import React, { Component } from 'react'

export class Counter1 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hello'
    }
    this.submit=this.submit.bind(this)
  }
  submit = () => {
    this.setState({
      message:'hi'})
  }
 
  render() {
    return (
      <div>
        {this.state.message}
        {/* <button onClick={this.submit.bind(this)}>Click</button> */}
        {/* <button onClick={()=>{this.submit()}}>Click</button> */}
        <button onClick={this.submit}>Click</button>
      
      </div>
    )
  }
}


export default Counter1;