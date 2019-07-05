import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

export default class AddTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
          redirect: false
        };
      }
      render() {
        return this.state.redirect ? (
            <Redirect to="/ticket-list" />
          ) : (
<div className="add-card">
              <p className="card-title-add">
                {this.props.edit ? "Edit ticket" : "New ticket"}
              </p>
<div class="form-row">
<div class="form-group col-md-6">
<label>Requester</label>
<input type="text" class="form-control" name="requesterTicket" placeholder="Requester"  onChange={this.props.handleChange}
          value={this.props.ticket.requesterTicket} />

</div>
<div class="form-group col-md-6">
<label>Assign To</label>
<input type="text" class="form-control" name="assignTo" placeholder="AssignTo"  onChange={this.props.handleChange}
          value={this.props.ticket.assignTo}/>

</div>
</div>
<div class="form-row">
<div class="form-group col-md-4">
    <label for="exampleFormControlSelect1">Priority </label>
    <select type="text" name="priority" class="form-control" placeholder="Priority" id="exampleFormControlSelect1" onChange={this.props.handleChange}
          value={this.props.ticket.priority}>
      <option> Major</option>
      <option> Very High</option>
      <option> High</option>
      <option> Meduim</option>
      <option> Low</option>
      <option> Very Low</option>
    </select>
  </div>
  <div class="form-group col-md-4">
    <label for="exampleFormControlSelect1">Status </label>
    <select type="text" name="statue" class="form-control" id="exampleFormControlSelect1" onChange={this.props.handleChange}
          value={this.props.ticket.statue}>
      <option> New</option>
      <option> Assigned</option>
      <option> Planned</option>
      <option> Pending</option>
      <option> Solved</option>
      <option> Closed</option>
    </select>
  </div>
</div>
<div class="form-row">
 {/* <div class="form-group col-md-6">
    <label>Date</label>
    <input type="date" class="form-control" id="date" name="date" placeholder="Date"  onChange={this.props.handleChange}
          value={this.props.ticket.date} />
</div>  */}
<div class="form-group col-md-6">
    <label>Date Limit</label>
    <input type="date" class="form-control" name="dateLimit" placeholder="Date Limit"  onChange={this.props.handleChange}
          value={this.props.ticket.dateLimit} />
</div>
</div><div class="form-row">
<div class="form-group col-md-6">
    <label>Title</label>
    <input type="text" class="form-control" name="title" placeholder="title"  onChange={this.props.handleChange}
          value={this.props.ticket.title} />
</div>

<div class="form-group col-md-6">
    <label>File</label>
    <input type="file" class="form-control" name="file" placeholder="file"  onChange={this.props.handleChange}
          value={this.props.ticket.file} />
</div>
</div>
<div class="form-group ">
    <label>Discription</label>
    <textarea type="text" class="form-control" name="discription" placeholder="discription"  onChange={this.props.handleChange}
          value={this.props.ticket.discription} />
</div>
<div class="form-group">
     <input
          type="button"
          value={this.props.edit ? 'Edit ticket' : 'Add ticket'}
          className="add-button"
          onClick={() => {
            this.props.action();
            this.setState({ redirect: true });
          }}
        />      
          <a class="btn btn-secondary" href="/ticket-list"><i class="fa fa-list-alt"></i> View All</a>
    </div>


</div>
    );
  }
}