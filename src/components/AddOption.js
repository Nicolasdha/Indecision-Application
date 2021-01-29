import React from 'react';

class AddOption extends React.Component{
  // Dont need to use this b/c CLASS PROP SYNTAX PLUGIN EXPERIMENTAL
    // constructor(props){ 
    //   super(props);
    //   this.handleAddOption = this.handleAddOption.bind(this);
      // this.state = {
      //   error: undefined
      // };
    //}



  state = {
    error: undefined
  };

  handleAddOption = (e) =>{
    e.preventDefault();
  
      const option = e.target.elements.newOptionName.value.trim();
  
      const error = this.props.handleAddOption(option);
      
      if(!error){
        e.target.elements.newOptionName.value = "";
      }
      
      this.setState(()=>({ error })
          // error: error
          // In ES6 if there is a property whose value comes from a variable with the same name you can leave it off -> error:error === error
      );

  }

    componentDidUpdate(){
      console.log("error update")
    }
  

    render(){
      return (
        <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
         <form className="add-option"onSubmit={this.handleAddOption}>
           <input type ="text" name="newOptionName" placeholder="Enter new option" className="add-option__input"/>
           <button className="button">Enter New Option</button>
         </form>
       </div>
      )
    }
  }
  
  
  export  {AddOption}