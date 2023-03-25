import React, { useEffect, useState } from 'react'

function UseEffectTest() {
    const [Sachin, setScore] = useState(0)

    useEffect(()=>{
        console.log({Sachin});
        return() =>{
            <div>
                console.log("out");
            </div>
    }
    },[])
    useEffect(() => {
        if(Sachin >= 100)
        console.log("Century" +{Sachin});
    },[Sachin])

    const ScoreUpdate = () => {
        setScore(Sachin+4)
    } 
  return (
    <div>
        <p>{Sachin}</p>
        <button onClick={ScoreUpdate}>click</button>
    </div>
  )
}

export default UseEffectTest