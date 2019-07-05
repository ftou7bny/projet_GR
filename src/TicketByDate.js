import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

class TicketByDate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            today : [],
            date :"",
            dateNow :"",
        }
    }
    componentDidMount = () => {
        // this.getContacts();
        // this.getReserves();
        this.getTickets();
      };
      getTickets = () => {
        var today = new Date();
        var y = today.getFullYear().toString()
        var m = today.getMonth().toString()
        var d = today.getDay().toString()
         var hedhi = (y+"-"+m+"-"+d).toString() ;
      //  var salem = dateNow.toString().substring(0,4)
        axios.get("/tickets").then(res =>
          this.setState({
             today: res.data.filter(el => el.date.substring(9,10) === today.getDay().toString()),
            
    
        })
        );
      };
  render() {
    var  dateNow = Date.now().toString().substring(0,9)
    return (
      <div className="">
      <table class ="table table-hover">
      <thead>
      <tr>         
        <th scope="col"colSpan="9" style={{fontSize: '20px'}}> Tickets</th>
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
            {this.state.today.map(el =>  
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
    );
  }
}
export default TicketByDate;