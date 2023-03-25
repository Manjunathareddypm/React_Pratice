import React from "react";

function Child(props) {
  return (
    <div>
      <h1>User component</h1>
      <button onClick={props.data}>click</button>
    </div>
  );
}

export default Child;