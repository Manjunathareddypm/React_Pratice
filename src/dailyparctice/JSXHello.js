import React from "react";

const Hello1 = () =>{
    // return(
    //     <div>
    //         <h1>Hello</h1>
    //     </div>
    // )

    return React.createElement('div',
    null,
    React.createElement('h1',null, 'hello')
    )
}

export default Hello1;