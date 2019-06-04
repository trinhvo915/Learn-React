import React,{ useState } from 'react';
import './App.css';
import Person from './nav/person';
import Example  from './nav/Example';

let App = () => {
  let array = ["askdj",3,5,7];
  let arr = [...array,9,"9"];
  console.log(arr);
  const [student, setStudent] = useState(
    {name: "sdfasd", age:null}
  );
  return (
    <div>
      <span>Hello</span>
      <Person name = "Hung demo" age = "23"/>
      <Person name = "Hung 1" age = "24"/>
      <Example name = {student.name} age = {student.age} set = {()=> setStudent(student)}/>
    </div>
  );
}
export default App;

