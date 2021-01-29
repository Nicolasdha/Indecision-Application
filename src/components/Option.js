import React from 'react';

const Option = (props) =>{
    return (
      <div className="option option__text">
      <p>{props.count}. {props.optionText}</p>
      <button 
      onClick={(e)=>{
        props.handleDeleteOption(props.optionText);
  // Cant call HDO directly b/c passes the event obj up so define
  // and inline function to pass up the correct value
      }}
      className= "button button--link"
    >Remove</button>
      </div>
    )
  }
  // class Option extends React.Component{
  //   render(){
  //     return (
  //       <div>
  //       {this.props.option}
        
  //       </div>
  //     )
  //   }
  // }
  
  export default Option