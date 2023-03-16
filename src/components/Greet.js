import React from 'react'

// function Greet() {
//     return <h1>Hello Manjunatha Reddy</h1>   
// }

// const Greet = () => <h1>Hello Manjunatha Reddy</h1> 

// const Greet = (props) => {
//     console.log(props);
//     return (
//         <div>
//     <h1>
//         Hello {props.name} a.k.a {props.heroName}
//         </h1>
//         {props.children}
//         </div>
//     )
// }

const Greet = (props) => {  //inside parameters {name, heroName} 1st type destructer
    
    const {name, heroName} = props  // 2nd type destructure
    return (
        <div>
    <h1>
        Hello {name} a.k.a {heroName}
        </h1>
        </div>
    )
}






export default Greet;