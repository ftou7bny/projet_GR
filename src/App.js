import React, { Component } from "react";
import "./App.css";

import { Link, Route } from "react-router-dom";

import axios from "axios";
import Home from './homeInterface';

import TicketByStatue from "./TicketByStatue";
import TicketByDate from "./TicketByDate";
import NavMenu from "./navBar";


// import TableContact from './tableContact';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
      contactlist: [],
      reservelist: [],
      ticketlist: [],
      requesterTicket: "",
      assignTo: "",
      priority: "",
      statue: "",
      date: "",
      dateLimit: "",
      title: "",
      discription: "",
      file: "",
      edit: false
    };
  }
  componentDidMount = () => {
    // this.getContacts();
    // this.getReserves();
    this.getTickets();
  };

  getTickets = () => {
    axios.get("/tickets").then(res =>
      this.setState({
        ticketlist: res.data
      })
    );
  };

  addTick = () => {
    this.setState({
      edit: false,
      requesterTicket: "",
      assignTo: "",
      priority: "",
      statue: "",
      date: "",
      dateLimit: "",
      title: "",
      discription: "",
      file: ""
    });
  };
 
  addTicket = () => {
    axios
      .post("/add-ticket", {
        requesterTicket: this.state.requesterTicket,
        assignTo: this.state.assignTo,
        priority: this.state.priority,
        statue: this.state.statue,
        date: this.state.date,
        dateLimit: this.state.dateLimit,
        title: this.state.title,
        discription: this.state.discription,
        file: this.state.file
      })
      .then(this.getTickets);
    this.addTick();
  };
  editTicket = () => {
    axios
      .put("/modify-ticket/" + this.state.id, {
        requesterTicket: this.state.requesterTicket,
        assignTo: this.state.assignTo,
        priority: this.state.priority,
        statue: this.state.statue,
        date: this.state.date,
        dateLimit: this.state.dateLimit,
        title: this.state.title,
        discription: this.state.discription,
        file: this.state.file
      })
      .then(this.getTickets);
    this.addTick();
  };


  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getTicket = (ticket, edit) => {
    this.setState({
      id: ticket._id,
      requesterTicket: ticket.requesterTicket,
      assignTo: ticket.assignTo,
      priority: ticket.priority,
      statue: ticket.statue,
      date: ticket.date,
      dateLimit: ticket.dateLimit,
      title: ticket.title,
      discription: ticket.discription,
      file: ticket.file,
      edit
    });
  };

  render() {
    return (
      <div className="App">
        {/* <LoginForm/> */}
        <NavMenu/>
        <Home/>
        <TicketByStatue/>
        <TicketByDate/>
       
        
        
        
        <Route
          path="/ticket-list"
          render={() => (
            <div className="ticket-list">





              
            </div>
          )}
        />
     
       
      </div>
    );
  }
}

export default App;
