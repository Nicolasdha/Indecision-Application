import React from 'react';


const Action = (props) =>{
    return( 
      <div>
      <button 
      disabled={!props.hasOptions}
      onClick={props.handlePick}
      className="big-button"
      >What should I do?</button>
      </div>
    )
  }
  
  
  // class Action extends React.Component{
  //   constructor(props){
  //     super(props)
  //   }
  
  //   render(){
  //     return( 
  //       <div>
  //       <button 
  //       disabled={!this.props.hasOptions}
  //       onClick={this.props.handlePick}
  //       >What should I do?</button>
       
  //       </div>
  //     )
  //   }
  // }
  

  export default Action 