import React from "react";

// function FunctionalComponent(){
//     return(
//         <din>
//             <h1>Hello World</h1></din>
//     )
// }

const FunctionalComponent = (props) => {
    return(
        <div>
        <h1>{props.name} last name {props.lastname}</h1>
        {props.children}
        </div>
    )
}

export default FunctionalComponent;