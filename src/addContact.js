import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/contact-list" />
    ) : (
      <div className="add-card">
        <p className="card-title-add">
          {this.props.edit ? 'Edit Contact' : 'New Contact'}
        </p>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Full Name</label>
            <input type="text" class="form-control" name="fullName" placeholder="Full Name" onChange={this.props.handleChange} value={this.props.contact.fullName}/>
          </div>
          <div class="form-group col-md-5">
            <label>Password</label>
            <input name="password" type="password" 
        class="form-control" placeholder="Password"
        onChange={this.props.handleChange} value={this.props.contact.password} />    
            </div>
        </div>
        {/* <input
          name="fullName"
          type="text"
          placeholder="Name..."
          onChange={this.props.handleChange}
          value={this.props.contact.fullName}
        /> */}
        <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" name="email" placeholder="Email"  onChange={this.props.handleChange}
          value={this.props.contact.email}/>  
        </div>
           {/* <input
          name="email"
          type="text"
          placeholder="Email..."
          onChange={this.props.handleChange}
          value={this.props.contact.email}
        /> */}
           <div class="form-row">
        <div class="form-group col-md-6">
            <label>Mobile</label>
            <input type="text" class="form-control" name="mobile" placeholder="Mobile" onChange={this.props.handleChange}
          value={this.props.contact.mobile}/>
        </div>
        <div class="form-group col-md-6">
            <label>City</label>
            <input type="text" class="form-control" name="city" placeholder="City"   onChange={this.props.handleChange}
          value={this.props.contact.city}/>
        </div>
    </div>
        {/* <input
          name="mobile"
          type="text"
          placeholder="Phone..."
          onChange={this.props.handleChange}
          value={this.props.contact.mobile}
        />
    
        <input
          name="city"
          type="text"
          placeholder="city..."
          onChange={this.props.handleChange}
          value={this.props.contact.city}
        /> */}

<div class="form-group">
          <input
          type="button"
          value={this.props.edit ? 'Edit contact' : 'Add Contact'}
          className="add-button"
          onClick={() => {
            this.props.action();
            this.setState({ redirect: true });
          }}
          />
        {/* <button type="submit" class="btn btn-info"><i class="fa fa-database"></i> Submit</button> */}
        <a class="btn btn-secondary" href="/contact-list"><i class="fa fa-list-alt"></i> View All</a>
    </div>

        {/* <input
          type="button"
          value={this.props.edit ? 'Edit contact' : 'Add Contact'}
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
export default AddContact;
