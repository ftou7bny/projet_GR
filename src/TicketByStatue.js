import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

class TicketByStatue extends Component {
    constructor(props) {
        super(props)
        this.state = {
            assigned : [],
            planned : [],
            pending : [],
            solved : [],
            closed : [],
            statue : "",
        }
    }
    componentDidMount = () => {
        // this.getContacts();
        // this.getReserves();
        this.getTickets();
      };
      getTickets = () => {
        axios.get("/tickets").then(res =>
          this.setState({
             assigned: res.data.filter(el => el.statue === "Assigned" ),
             planned: res.data.filter(el => el.statue === "Planned" ),
             pending: res.data.filter(el => el.statue === "Pending" ),
             solved: res.data.filter(el => el.statue === "Solved" ),
             closed: res.data.filter(el => el.statue === "Closed" ),
        })
        );
      };
  render() {
   
    return (
      <div className="">
 <table class ="table table-hover">
    <thead>
         <tr> <th scope="col" colSpan="2" style={{fontSize: '20px'}}> Tickets</th> </tr>
         <tr className="ticketTable">  <th>Status</th> <th>Number</th> </tr>
    </thead> 
              
  <tbody>
        <tr>   <td>Assigned</td>  <td> {this.state.assigned.length }</td> </tr>
        <tr>    <td>planned</td>  <td> {this.state.planned.length}</td>  </tr>
        <tr>   <td>pending</td>   <td> {this.state.pending.length}</td> </tr>
        <tr>   <td>solved</td>  <td> {this.state.solved.length}</td>   </tr>
        <tr>   <td>closed</td>  <td> {this.state.closed.length}</td>   </tr> 
  </tbody>
</table>
        </div> 
    );
  }
}
export default TicketByStatue;