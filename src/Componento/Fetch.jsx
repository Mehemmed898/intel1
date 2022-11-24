import React, { Component } from 'react'
import "./Buton.css"

class App extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    isActive: false,
    type: "password"
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  change() {
    if(this.state.isActive===false){
      this.setState({isActive:true,type: "text"})
    }else{
      this.setState({isActive:false,type: "password"})
    }

  }



  handleClick = () => this.setState({ name: "" });
  handleClick2 = () => this.setState({ email: "" });
  handleClick3 = () => this.setState({ password: "" });

  render() {

    return (
      <div className='tural'>
        <label checked={this.state.isActive} htmlFor="name">Name:</label>
        <input value={this.state.name} type="text" id="name" name="name" onChange={(e) => this.handleChange(e)} />
        <button onClick={this.handleClick}>X</button>

        <br></br>
        <label htmlFor="email">Email:</label>
        <input value={this.state.email} type="text" id="email" name="email" onChange={(e) => this.handleChange(e)} />
        <button onClick={this.handleClick2}>X</button>

        <br></br>
        <label type="text" htmlFor="password">Password:</label>
        <input value={this.state.password} type={this.state.type} id="password" name="password"  onChange={(e) => this.handleChange(e)}  />
        <button onClick={this.handleClick3}>X</button>
        
        <input type="checkbox" checked={this.state.isActive} onChange={() => this.change()} />
      </div>
    );
  }
}

export default App


