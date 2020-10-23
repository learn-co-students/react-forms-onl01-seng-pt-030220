import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }

  handleFirstNameChange = event => {
    let {name, value} = event.target
    console.log(value)
    this.setState({
      [name]: value
    })
  }

  // handleSubmit = event => {
  //   event.preventDefault()
  //   let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
  //   this.sendFormDataSomewhere(formData)
  // }

  handleSubmit = event => {
    event.preventDefault()
    let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData: dataArray})
  }
 
  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
      <div>
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleFirstNameChange(event)} value={this.state.lastName} />
        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <input type="submit"/>
        </form>
        {this.listOfSubmissions()}
        </div>
    )
  }
}

export default Form;