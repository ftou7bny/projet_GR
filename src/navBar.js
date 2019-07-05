import React from "react";
import './navBar.css';
import { Link } from 'react-router-dom';


export default class NavMenu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: ""
      };
    }
    render() {
    //   const { email, password } = this.state;
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light navBar" >
           <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div class="nav-item" className="dopdown-item">
          <a class="navbar-brand"  href="#">Assistance</a>
          <ul className="dropdown-list">
          <li> <Link to="/new-ticket">
              Create Ticket     
                </Link>
                </li>          
          <li> <Link to="/ticket-list">
              Tickets     
                </Link>
          </li>
            <li>Problem</li>
            <li>Statistics</li>
          </ul>
          </div>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
  
            <li class="nav-item active" className="dropdown-item">
              <a class="nav-link" href="#">Tools <span class="sr-only">(current)</span></a>
              <ul className="dropdown-list">
              <li> <Link to="/new-reserve">
                     Add Reservations     
                </Link>
                </li>
              <li> <Link to="/reserve-list">
                      Reservations     
                </Link>
                </li>
  
            <li>Reports</li>
          </ul>
            </li>
            <li class="nav-item" className="dropdown-item">
              <a class="nav-link" href="#">Administration</a>
            <ul className="dropdown-list">
            <li> <Link to="/new-contact">
              Add Contact     
                </Link>
          </li>
            <li> <Link to="/contact-list">
              Contact     
                </Link>
          </li>         
        
             <li>Profiles</li>
            <li>Groups</li>
          </ul>
          </li>
          </ul>
         
        </div>
      </nav>
        );
        }
}