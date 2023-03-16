import React,{useState} from "react";

function Mame() {
    const [object, setobj] = useState('hello')

    const newmes = () => {
        setobj('hi')
    }
    return(
        <div>
        <p>{object}</p>
        <button onClick={newmes}>click</button>
        </div>
    )
    
    
}
export default Mame;