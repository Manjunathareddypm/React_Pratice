import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:' ',
         comments:'',
         topic:'React'
      }
    }
    setname = (event) => {
        this.setState({
            username:event.target.value
        })
    }

    setComments = (event) =>{
        this.setState({
            comments:event.target.value
        })
    }

    settopic = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    setsubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
  render() {
    return (
      <form onSubmit={this.setsubmit}>
        <div>
        <label>Username</label>
            <input type='text' value={this.state.username} onChange={this.setname}/>
        </div>
        <div>
            <label>Comments</label>
            <textarea
            value={this.state.Component}
            onChange={this.setComments}
            />
        </div>
        <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.settopic}>
            <option value='react'>React</option>
            <option value='angular'>Angular</option>
            <option value='vue'>Vue</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form