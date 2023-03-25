import React,{Component, useState} from "react";

// class ClassComponent extends Component{
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          name:'Ram'
//       }
//     }
//     change = () => {
//         this.setState({
//             name:'thank you'
//         })
//     }
//     render(){
//         return(
//             <div><h1>{this.state.name}</h1>
//             <button onClick={()=>this.change()}> CLick</button>
//             </div>
            
//         )
//     }
// }


// function ClassComponent() {
//     const [state, setState] = useState(0)
//         const submit = () => {
//         setState({
//           state: state + 1
//         })
            
//         }
//     }
//   return (
//     <div>
//         <p>{state}</p>
//         <button onClick={submit}>click</button>
//     </div>
//   )
// }



// class ClassComponent extends Component{
//     render(){
//         return(
//             <div>Hello</div>
//         )
//     }
// }


class ClassComponent extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         first:'God',
         last:'Humans',
         Games:['video Games','Outdoor Games', 'Indoor Games'],
         family:{
                father:'Head',
                mother:'farmer',
                brother:'business'      
         }
      }
    }

    render(){
        return(
            <div>
                {this.state.family.father}
            </div>
        )
    }
}


export default ClassComponent;