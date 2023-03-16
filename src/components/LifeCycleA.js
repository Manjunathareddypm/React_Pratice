import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Reddy'
      }
      console.log('LifeCycleA consturctor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA getDerivedStateFromProps');
        return null
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,preState){
        console.log('LifeCycleA getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate');
    }
    changestate =()=>{
        this.setState({
            name:'man'
        })
    }
  render() {
    console.log('LifeCycleA render');
    return (
        <div>
      <div>LifeCycle A1</div>
      <button onClick={this.changestate}>Click</button>
      <LifeCycleB /></div>
    )
  }
}

export default LifeCycleA;