import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

class ContactCard extends Component {
  render() {
    const { contact, getPerson } = this.props;
    return (
      <div className="contact-card">
        <div className="card-text">
       
          
          <Link to="/edit-contact">
            <input
              type="button"
              value="Edit"
              className="edit-button"
              onClick={() => getPerson(contact, true)}
            />
          </Link>
          <input type="button" value="Delete" className="edit-button" />
        </div>
       
    
      </div>
      
    );
  }
}
export default ContactCard;

