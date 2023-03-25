import React, { useState } from "react";

// function FunctionalComponent(){
//     return(
//         <din>
//             <h1>Hello World</h1></din>
//     )
// }




// const FunctionalComponent = (props) => {
//     return(
//         <div>
//         <h1>{props.name} last name {props.lastname}</h1>
//         {props.children}
//         </div>
//     )
// }



// function FunctionalComponent(){
//     return(
//         <div>Hello Functional component</div>
//     )
// }


function FunctionalComponent(params) {

    const[object, setobject] = useState({first:'God',
    last:'Humans',
    Games:['video Games','Outdoor Games', 'Indoor Games'],
    family:{
           father:'Head',
           mother:'farmer',
           brother:'business' }})

    return(
        <div>{object.first}</div>
    )
    
}

export default FunctionalComponent;