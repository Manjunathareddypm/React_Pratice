import React, {useState}from "react";

function Review(){
    const [arr, setadd] = useState([1,2,3,4,5,6,7,8,9,10])
    const add =() => {
     setadd((prev) => [...prev, 11,2,13]       
    )}
    return(
        <div>
            <div style={{display:'flex', alignItems:'center'}}>
                {
                    arr.map((items)=>
                        <div style={{width: '5vw', height:'5vh',backgroundColor:'skyblue', border: '1px solid red', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>{items}</div>)
                } 
                <br />
        </div>
                <button style={{width:'5vw',height:'5vh'}} onClick={add}>Add Count</button>
        </div>
        
       
    )
}

export default Review;