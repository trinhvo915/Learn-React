import React, { useState } from 'react';

function Example(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <p>your name {props.name} </p>
      <p>your age {props.age} </p>

      <button onClick = {props.set({name: "hung1",age:25})}>Change Student</button> 
    </div>
  );
}
export default Example;