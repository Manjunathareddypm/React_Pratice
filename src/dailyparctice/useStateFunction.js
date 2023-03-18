import React, { Component, useState } from 'react'

//  class UseStateFunction extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          count:0
//       }
//     }

//     increment=()=>{
//     this.setState(previse => {
    // return{
//         count: previse.count +1
    // }
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




// function UseStateFunction() {
//     let a =0
//     const [count, setCount]= useState(a)
//     const submit = ()=>{
//         setCount(a )
//     }
//     const submit1 = ()=>{
//         setCount((previse)=>
//                 previse +  1
//         )
//     }
//     const submit2 = ()=>{
//         setCount((previse)=>
//                 previse - 1
//         )
//     }

//     const increment5 = () => {
//         for (let i = 0; i < 5; i++) {
//             setCount(previse => previse + 1)
            
//         }
        
//     }

//   return (
//     <div>
//         {count}
//         <button onClick={submit}>click</button>
//         <button onClick={submit1}>click</button>
//         <button onClick={submit2}>click</button>
//         <button onClick={increment5}>click</button>
//     </div>
//   )
// }


// function UseStateFunction() {
//     const [name, setName] = useState({firstName:'', lastName:''})

//   return (
//     <form>
//         <input type="text" vlaue={name.firstName} onChange={e=> setName({...name, firstName:e.target.value})}/>
//         <input type="text" vlaue={name.lastName} onChange={e1=> setName({...name, lastName:e1.target.value})}/>
//         <h2>FName -{name.firstName}</h2>
//         <h2>lName -{name.lastName}</h2>
//         <h2>{JSON.stringify(name)}</h2>
//     </form>
//   )
// }



function UseStateFunction() {
    const [items, setItems] = useState([10,60,50])

    const addItem = () => {
        setItems([...items,{
            id: items.length,
            value: Math.floor(Math.random() * 10) +1
        }])
    }
  return (
    <div>
        <button onClick={addItem}>Add a number</button>
        <ul>
           { items.map(item => (
            <li Key={items.id}>{item.value}</li>))}
        </ul>
    </div>
  )
}


export default UseStateFunction