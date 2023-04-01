import React, { useState } from "react";

// function StateTest() {
//     const[name, setname] = useState("Manju")

//     const ChangeName = () => {
//         setname('Reddy')
//     }
//     return(
//         <div>
//         <p>{name}</p>
//         <button onClick={ChangeName}>click</button>
//         </div>
//     )
// }









// function StateTest(){
//     const[newObj, setObj] = useState({name:"manju", lastname:"Reddy"})
//     const change = () => {
//         setObj((prev) => ({...prev, name:'gfh'}))
//         setObj((prev) => ({...prev, lastname:"lkj"}))
//     }
//     return(
//         <div>
//             <p>{newObj.name}</p>
//             <p>{newObj.lastname}</p>
//             <button onClick={change}>click</button>    
//         </div>
//     )
// }


// function StateTest() {
//     const [names, setNames] = useState({firstName:"", lastName:""})
//     const changefNames = (e) => {
//         setNames((prev) => ({...prev, firstName:e.target.value}))     
//     }
//     const changelNames = (e) => {
//         setNames((prev) => ({...prev, lastName:e.target.value}))
//     }

//     const display = (e) => {
//         console.log(names);
//     }
//     return(
//         <div>
//             <p>my firstname is {names.firstName}</p>
//             <p> my lastname {names.lastName}</p>
//             <input type='text' value={names.firstName} onChange={changefNames} />
//             <input type='text' value={names.lastName} onChange={changelNames} />
//             <button onClick={display}>click</button>

//         </div>
//     )
    
// }



// function StateTest() {
//   const [input, setInput] = useState("");
//   const [words, setWords] = useState([]);

//   return (
//     <div className="App">
//       <h1>Input value: {input}</h1>
//       <input
//         type="text"
//         placeholder="type something"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button onClick={() => setWords((state) => [...state, input])}>
//         Add Word
//       </button>
//       {words.map((word, idx) => (
//         <div key={idx}>{word}</div>
//       ))}
//     </div>
//   );
// }

// function StateTest(){
//     const [arr, setarr] = useState([10, 20, 30, 40, 50, 60, 70, 80])

//     const addElements = () => {
//         setarr((prev)=>([...prev, 90, 100]
//         ))
//     }
   
//     return(
//         <div>
//             <div style={{display:"flex", alignItems:"center"}}>
//                 {
//                     arr.map((items)=>
//                     <div style={{width:'5vw', height:'5vh', backgroundColor:"blue", border:'1px solid black', display:"flex", flexDirection:"row", justifyContent:'Center', alignItems:"center"}} >{items}</div>)
//                 }

//             </div>
//             <button onClick={addElements}>click to add elements</button>
//         </div>
//     )
// }




// export default StateTest