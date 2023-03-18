
import React, { Component } from 'react'

export class ClassCounterOne extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    componentDidMount(){
        document.title = `Clicked ${this.state.count} times`
    }
    componentDidUpdate(){
        document.title = `Clicked ${this.state.count} times`
    }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={()=> this.setState({count: this.state.count + 1})}>CLick</button>

      </div>
    )
  }
}

export default ClassCounterOne