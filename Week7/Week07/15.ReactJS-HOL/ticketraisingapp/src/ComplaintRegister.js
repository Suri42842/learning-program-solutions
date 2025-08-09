
import React from 'react';

class ComplaintRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      complaint: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const transactionId = Math.floor(Math.random() * 100) + 1;
    alert(`Thanks ${this.state.name}\nYour Complaint was Submitted.\nTransaction ID is: ${transactionId}`);
    // Optionally reset the form
    this.setState({ name: '', complaint: '' });
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2 style={{ color: 'red', fontWeight: 'bold' }}>
          Register your complaints here!!!
        </h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label style={{ marginRight: '10px' }}>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label style={{ marginRight: '10px' }}>Complaint:</label>
            <textarea
              name="complaint"
              value={this.state.complaint}
              onChange={this.handleChange}
              required
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ComplaintRegister;
