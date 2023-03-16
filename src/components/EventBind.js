import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props){
        super(props)

        this.state = {
            message: 'Hello'
        }

        // this.ClickHandler = this.ClickHandler.bind(this)
    }

    // ClickHandler(){
    //     this.setState({
    //         message: 'GoodBye'
    //     })
    //     console.log(this);
    // }

    ClickHandler = () =>{
        this.setState({
            message: 'good bye'
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.ClickHandler.bind(this)}>click</button> */}
        {/* <button onClick={() => this.ClickHandler() }>click</button> */}
      {/* <button onClick={this.ClickHandler }>click</button> */}
      <button onClick={this.ClickHandler}>click</button>
      </div>
    )
  }
}

export default EventBind