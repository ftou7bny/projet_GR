import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import ReserveCard from './reserveCard';
import AddReserve from './addReserve'


export default class AppReserve extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: '',
        item: '',     
        requester: '',
        startdate: '',
        duration:'',
        Comments:'',
        reservelist:[],
        edit: false
      };
    }
    componentDidMount = () => {
      this.getReserves();
    }
    getReserves = () => {
      axios.get('/reserves').then(res =>
        this.setState({
          reservelist: res.data
        })
      );
    };
    addResv = () => {
      this.setState({
        edit: false,
        item: '',     
        requester: '',
        startdate: '',
        duration:'',
        Comments:''
      });
    };
    addReserve = () => {
      axios
        .post('/add-reserve', {
          item: this.state.item,
          requester: this.state.requester,
          startdate: this.state.startdate,
          duration: this.state.duration,
          Comments: this.state.Comments,
        })
        .then(this.getReserves);
      this.addResv();
    };
    editReserve = () => {
      axios
        .put('/modify-reserve/' + this.state.id, {
          item: this.state.item,
          requester: this.state.requester,
          startdate: this.state.startdate,
          duration: this.state.duration,
          Comments: this.state.Comments,
        })
        .then(this.getReserves);
      this.addResv();
    };

    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
    getReserve = (reserve, edit) => {
      this.setState({
        id: reserve._id,
        item: reserve.item,
        requester: reserve.requester,
        startdate: reserve.startdate,
        duration: reserve.duration,
        Comments: reserve.Comments,
        edit
      });
    };
  render() {
    const { reserve, getReserve } = this.props;

      return (
        <div>
        <Route
        path="/reserve-list"
        render={() => (
          <div className="reserve-list">
    
    <table class="table table-hover">
      <thead>
      <tr>         
        <th scope="col" colSpan="5" text-align="center"> Item to do</th>
      </tr>
      <tr className="ticketTable">
        <th>Item</th>
        <th>Requester</th>
        <th>Start Date</th>
        <th>Duration</th>
        <th>Description</th>
      </tr>
    </thead>  
    <tbody>
            {this.state.reservelist.map(el =>  
              <tr>
              <td>{el.item}</td>
              <td>{el.requester}</td>
              <td> {el.startdate}</td>
              <td>{el.duration}</td>
              <td>{el.Comments}</td>
              </tr> 
 )}
         
              {/* //  <ReserveCard  reserve={el} getReserve={this.getReserve} /> */}
           
    </tbody>
</table>
          </div>
        )}
      />
      <Route
      path="/(new-reserve|edit-reserve)/"
      render={() => (
        <AddReserve
          handleChange={this.handleChange}
          action={this.state.edit ? this.editReserve : this.addReserve}
          edit={this.state.edit}
          reserve={this.state}/> )}
        /> 
</div>

      )}
}
