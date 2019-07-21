import React, {Component} from 'react';
import './App.css';
import InputZone from './InputZone';
import ChatZone from './ChatZone';
import ContactWindow from './ContactWindow';


class CommunicationZone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : '',
            history : ["How can I help?"],
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        
        this.setState({
                value: event.target.value
            }); 
      }

      handleSubmit(event){
        
        if (event.key === 'Enter') {
            this.setState({
                value: '',
                history : [...this.state.history, event.target.value]
            });

            setTimeout(function() {
                this.dialogueEngine();
            }.bind(this), 3000);
            
        }  
      }

      dialogueEngine(){
        const answers = ["can you elaborate?","and why do you believe that is so?","can you be more specific?","what would be your guess?"]; 
        let response = answers[Math.floor(Math.random()*answers.length)];
        console.log(response);
        
            this.setState({
                history : [...this.state.history, response]
            });
        }
        


  render() {

  return (
      <div className="chatHost innerShadow">
    <ContactWindow/>
    <ChatZone chatItem={this.state.history}/>
    <InputZone handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state.value}/>
    
    </div>
    
  );
}

}

export default CommunicationZone;