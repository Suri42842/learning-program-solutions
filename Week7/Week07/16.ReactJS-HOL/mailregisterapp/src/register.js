 
import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, password } = this.state;

    if (name.length < 5) {
      alert('Full Name must be 5 characters long!');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      alert('Email is not valid!');
      return;
    }

    if (password.length < 8) {
      alert('Password must be 8 characters long!');
      return;
    }

    alert(`Registration Successful for ${name}`);
    this.setState({ name: '', email: '', password: '' });
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2 style={{ color: 'red', fontWeight: 'bold' }}>
          Register Here!!!
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
            <label style={{ marginRight: '10px' }}>Email:</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label style={{ marginRight: '10px' }}>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
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

export default Register;
