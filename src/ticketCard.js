import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TicketCard extends Component {
  render() {
    const { ticket, getTicket } = this.props;
    return (
      <div className="ticket-card">
        <p className="ticket-card-title"></p>
        
   <div className="card-text">
     {/* <tr>
          <th>{ticket.requesterTicket}</th>
          <th>{ticket.assignTo}</th>
          <th> {ticket.priority}</th>
          <th>{ticket.statue}</th>
          <th>{ticket.date}</th>
          <th>{ticket.dateLimit}</th>
          <th>{ticket.title}</th>
          <th>{ticket.discription}</th>
          <th>{ticket.file}</th>
      </tr> */}
          
          <Link to="/edit-ticket">
            <input
              type="button"
              value="Edit"
              className="edit-button"
              onClick={() => getTicket(ticket, true)}
            />
          </Link>
          <input type="button" value="Delete" className="edit-button" />
        </div>  
        </div> 
    );
  }
}
export default TicketCard;