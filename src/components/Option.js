import React from 'react';

const Option = (props) =>{
    return (
      <div className="option option__text">
      <p>{props.count}. {props.optionText}</p>
      <button 
      onClick={(e)=>{
        props.handleDeleteOption(props.optionText);
      }}
      className= "button button--link"
    >Remove</button>
      </div>
    )
  }
  
  export default Option