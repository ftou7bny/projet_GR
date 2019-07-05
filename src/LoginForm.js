import React from "react";
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import axios from "axios";

import './LoginForm.css';
import './images/user-solid.svg'
import './images/unlock-alt-solid.svg'
export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        fullName: "",
      password: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  getPerson = (contact, edit) => {
    this.setState({
      id: contact._id,
      fullName: contact.fullName,
      password: contact.password,
    //   email: contact.email,
    //   mobile: contact.mobile,
    //   city: contact.city,
      edit
    });
  };
  getContacts = () => {
    axios.get("/contacts").then(res =>
      this.setState({
        contactlist: res.data
      })
    );
  };
  addauthen =() =>{
    axios.get("/contacts").then(res =>
        this.setState({
    fullName: this.state.fullName,
    password: this.state.password
})
);
  }
  getPerson = (contact, edit) => {
    this.setState({
        fullName: contact.fullName,
        password: this.state.password
    });
};
  render() {
    const { contact, getPerson } = this.props;

    const { fullName, password } = this.state;
    return (
      <div className="loginpage">
        <div className="login">Login</div>
      <form className="LoginContenus" onSubmit={this.handleSubmit}>
        <div className="username">
        {/* <label htmlFor="email">Login</label><br/> */}
        <input className="logoPassword"
          name="fullName"
          type="text"
          placeholder="Enter your name"
          value={fullName}
          onChange={this.handleChange}
        />
        <i className="fas fa-user" ></i>
        </div>
        <div className="password">
        {/* <label htmlFor="email">Password</label><br/> */}
        <input className="logoPassword"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={this.handleChange}
        />
        </div>
<div className="buttonLogin" >

        <button className="btnLogin"  type="submit">Login</button>
        {/* <Link to="/">
        <input
          type="button" className="btnLogin"
          value="login"
          // className="add-button"
          onClick={() => {
            this.setState({ redirect: true });
          }}
          /> </Link> */}

        </div>
      </form>
      </div>
    );
  }

//   handleChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value

//     });
//   };

  handleSubmit = event => {
    console.log("Submitting");
    console.log(this.state);
  };
}
