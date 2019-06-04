import React from 'react';
const person = (props) =>{
    return (
        <div>
            <h3>My's : {props.name}</h3>
            <span>Age : {props.age}</span>
        </div>
    );
}
export default person;