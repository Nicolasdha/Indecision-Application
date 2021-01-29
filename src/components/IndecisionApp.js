import React from 'react';
import {AddOption} from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'
import OptionModal from './OptionModal'



// Stateless functional component - simple presentational component - a lot faster


export default class IndecisionApp extends React.Component{
   // Dont need to use this b/c CLASS PROP SYNTAX PLUGIN EXPERIMENTAL
    // constructor(props){
    //   super(props);
    //   this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //   this.handlePick = this.handlePick.bind(this);
    //   this.handleAddOption = this.handleAddOption.bind(this);
    //   this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //   this.state = {
    //     options: props.options
    //   };
    // }
    state = {
      options: this.props.options,
      selectedOption: undefined
    };

    componentDidMount(){
      console.log("component did mount")
      try{
        let json = localStorage.getItem('options')
        if(json !== null){
          json = JSON.parse(json)
          this.setState(()=>({ options: json }))
        }
      } catch(e){
        console.log('Corrupted Data')
      }
    };
  
    componentDidUpdate(prevProps, prevState){
      console.log("componenet did update")
  
      if(prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options)
        localStorage.setItem('options', json)
      }
    };
  
    handleDeleteOption = (option) => {
      this.setState((prevState) =>({ options: prevState.options.filter((each) => each!== option)
    }));
    }
  
    handleDeleteOptions = () => {
      // Implicitly return object but need () around the object
      this.setState(()=> ({ options: [] })
      );
    };
  
    handlePick = () => {
      let randomNumber = Math.floor(Math.random() * this.state.options.length)
      let option = this.state.options[randomNumber];
      this.setState(()=>({
        selectedOption: option
      }));
    };
  
    handleAddOption = (option) => {
  
      if(!option){
        return 'Enter valid item'
      } else if(this.state.options.indexOf(option) > -1){
        return "This option already exists"
      }
      this.setState((prevState)=>({ options: prevState.options.concat(option)}));
    };
  
    closeModal = () =>{
      this.setState(()=>({ selectedOption: undefined }
      ));
    }

    render(){
      const title = "Indecision"
      const subTitle = "Put your life in the hands of a computer"
  
      return (
        <div>
        <Header 
          title={title}
          subTitle={subTitle}
        />

        <div className="container">

             <Action 
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
            />

            <div className="widget">

              <Options 
                options={this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
              />
              
              <AddOption 
            handleAddOption = {this.handleAddOption} 
            />
            
           </div>

            
          
        </div>

        <OptionModal 
        selectedOption = {this.state.selectedOption}
        closeModal = {this.closeModal}
        />
        </div>
      )
    }
  }
  
  
  IndecisionApp.defaultProps = {
    options: ['asd', 'esr']
  }
  
  
