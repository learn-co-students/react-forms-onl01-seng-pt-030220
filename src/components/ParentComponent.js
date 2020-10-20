import React from 'react'
import Form from './Form'
import DispalyData from './DisplayData'

class ParentComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Form
        formData={this.state}
        handleChange={this.handleChange}
        />
        <DispalyData formData={this.state}/>
      </div>
      
    )
  }
}

export default ParentComponent;