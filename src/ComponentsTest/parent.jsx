import React from "react";
import Child from "./Child";

function Parent() {
  const greet = () => {
    alert("hello from parent");
  };
  return (
    <div>
      <Child data={greet} />
    </div>
  );
}

export default Parent;