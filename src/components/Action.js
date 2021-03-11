import React from 'react';


const Action = (props) =>{
    return( 
      <div>
   
      <div className="btn-bg Ocean">
      <div className="btn-group">
        <div className="btn Coral">
          <button
          disabled={!props.hasOptions}
          onClick={props.handlePick}
          className="button1"
          >
          What Should I Do?
          <span className="Coralwave1"></span>
          <span className="Coralwave2"></span>
          <span className="Coralwave3"></span>
          </button>
        </div>
      </div>
    </div>
      </div>
    )
  }

  export default Action 