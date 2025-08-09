import React from 'react';

class Getuser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: null,
      loading: true
    };
  }

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
    console.log(data.results[0]);
  }

  render() {
    if (this.state.loading) {
      return <h3>Loading...</h3>;
    }

    if (!this.state.person) {
      return <h3>No user data found</h3>;
    }

    const { title, first, last } = this.state.person.name;
    const imgUrl = this.state.person.picture.large;

    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>
          {title} {first} {last}
        </h2>
        <img src={imgUrl} alt="User" />
      </div>
    );
  }
}

export default Getuser;
