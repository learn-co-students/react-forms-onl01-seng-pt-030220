import React from 'react';

class Form extends React.Component {
  render () {
    return (
      <div>
        <form>
          <input 
            type="text" 
            onChange={event => this.handleFirstNameChange(event)} 
            value={this.state.firstName} 
            />
          <input type="text" 
            onChange={event => this.handleLastNameChange(event)} 
            value={this.state.lastName} 
          />
        </form>
      </div>
      
    )
  }
}

export default Form;