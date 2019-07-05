import React, { Component } from "react";
import "./App.css";
import NavMenu from "./navBar";
import { Link, Route } from "react-router-dom";
import AddTicket from "./addTicket";
import TicketCard from "./ticketCard";
import AppContact from "./AppContact";
import AppReserve from "./AppReserve";
import LoginForm from "./LoginForm"
import axios from "axios";


import ContactCard from "./contactCard";
import AddContact from "./addContact";
import ReserveCard from "./reserveCard";
import AddReserve from "./addReserve";
import HomeContent from "./TicketByStatue";
// import TableContact from './tableContact';
class Home extends Component {
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
        
        {/* <HomeContent/> */}
        <AppReserve />
        <AppContact />
        <Route
          path="/ticket-list"
          render={() => (
            <div className="ticket-list">



    <table class ="table table-hover">
      <thead>
      <tr>         
        <th scope="col" colSpan="9" style={{fontSize: '20px'}}> Tickets</th>
      </tr>
      <tr className="ticketTable">
        <th>Requester</th>
        <th>Assign To</th>
        <th>Priority</th>
        <th>Status</th>
        <th>Date</th>
        <th>Date Limit</th>
        <th>Title</th>
        <th>Discription</th>
        <th>file</th>
      </tr>
    </thead>  
    <tbody>
            {this.state.ticketlist.map(el =>  
              <tr>
              <td>{el.requesterTicket}</td>
              <td>{el.assignTo}</td>
              <td> {el.priority}</td>
              <td>{el.statue}</td>
              <td>{el.date.toString().substring(0,19).replace('T', '/')}</td>
              <td>{el.dateLimit}</td>
              <td>{el.title}</td>
              <td>{el.discription}</td>
              <td>{el.file}</td>
              </tr> 
 )}         
    </tbody>
</table>



        
            </div>
          )}
        />
        {/* <TicketCard getTicket={this.getTicket} /> */}
        <Route
          path="/(new-ticket|edit-ticket)/"
          render={() => (
            <AddTicket
              handleChange={this.handleChange}
              action={this.state.edit ? this.editTicket : this.addTicket}
              edit={this.state.edit}
              ticket={this.state}
            />
          )}
        />
      </div>
    );
  }
}

export default Home;