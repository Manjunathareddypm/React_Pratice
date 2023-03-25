// function MissedGoal() {
//     return <h1>MISSED!</h1>;
//   }
  
//   function MadeGoal() {
//     return <h1>Goal!</h1>;
//   }
  
//   function Goal(props) {
//     const isGoal = props.isGoal;
//     return (
//       <>
//         { isGoal ? <MadeGoal/> : <MissedGoal/> }
//       </>
//     );
//   }
  
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<Goal isGoal={false} />);





import React, { Component } from "react";

class UserLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    return this.state.isLoggedIn ? (
      <div>User loggedin sucessfully</div>
    ) : (
      <div>Guest Logged in</div>
    )
  }
}

export default UserLogin;