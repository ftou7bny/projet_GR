import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

export default class AddReserve extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }
  render() {
    return this.state.redirect ? (
      <Redirect to="/reserve-list" />
    ) : (
      <div className="add-reserve">
        <p className="card-title-add">
          {this.props.edit ? "Edit reserve" : "New reserve"}
        </p>

        <div class="form-group">
        <label>Item</label>
        <input type="text" class="form-control" name="item" placeholder="Reserve an item"   onChange={this.props.handleChange}
          value={this.props.reserve.item} />
        </div> 
    <div class="form-group">
        <label>By </label>
        <input type="text" class="form-control" name="requester" placeholder="requester"  onChange={this.props.handleChange}
          value={this.props.reserve.requester} />
    </div> 
     <div class="form-row">
        <div class="form-group col-md-6">
            <label>Date</label>
            <input type="date" class="form-control" id="startdate" name="startdate" placeholder="Start date" onChange={this.props.handleChange}
          value={this.props.reserve.startdate}/>
        </div>
        <div class="form-group col-md-6">
            <label>Duration (hours)</label>
            <input type="text" class="form-control" name="duration" placeholder="Duration time"  onChange={this.props.handleChange}
          value={this.props.reserve.duration }/>
        </div>
    </div>
     <div class="form-group ">
            <label>Discription</label>
            <textarea type="text" class="form-control" name="Comments" placeholder="discription"  onChange={this.props.handleChange}
          value={this.props.reserve.Comments} />
        </div>
     <div class="form-group">
     <input
          type="button"
          value={this.props.edit ? 'Edit reserve' : 'Add reserve'}
          className="add-button"
          onClick={() => {
            this.props.action();
            this.setState({ redirect: true });
          }}
        />      
          <a class="btn btn-secondary" href="/reserve-list"><i class="fa fa-list-alt"></i> View All</a>
    </div>



        {/* <input
          name="item"
          type="text"
          placeholder="item..."
          onChange={this.props.handleChange}
          value={this.props.reserve.item}
        />
        <input
          name="requester"
          type="text"
          placeholder="requester..."
          onChange={this.props.handleChange}
          value={this.props.reserve.requester}
        />
         <input
          name="startdate"
          type="date"
          placeholder="startdate..."
          onChange={this.props.handleChange}
          value={this.props.reserve.startdate}
        />
         <input
          name="duration"
          type="text"
          placeholder="duration..."
          onChange={this.props.handleChange}
          value={this.props.reserve.duration}
        />
         <input
          name="Comments"
          type="text"
          placeholder="Description..."
          onChange={this.props.handleChange}
          value={this.props.reserve.Comments}
        /> */}
        {/* <input
          type="button"
          value={this.props.edit ? 'Edit reserve' : 'Add reserve'}
          className="add-button"
          onClick={() => {
            this.props.action();
            this.setState({ redirect: true });
          }}
        /> */}
        

      </div>
    );
  }
}
