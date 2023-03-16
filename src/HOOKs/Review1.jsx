import React,{useState} from "react";

function Mame() {
    const [object, setobj] = useState('hello')
    return(
        <div>
        <p>{object}</p>
        <button onClick={ () => setobj('hi')}>click</button>
        </div>
    )
    
    
}
export default Mame;