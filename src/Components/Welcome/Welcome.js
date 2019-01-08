import React, { Component } from 'react';
import './Welcome.css';
import { withRouter } from 'react-router-dom';


class Welcome extends Component {
  // constructor() {

  //   super();
  // }


  redirect = () => {
    console.log('click')
    this.props.history.push('/home');
  }

  render() {
    return (
      <div className='Welcome-component'>
        <div className='welcoming-container'>
          <h1 className='welcome-message'>Scuba Squad does Bonaire!</h1>
          <button
            className='welcome-button'
            onClick={() => this.redirect()}>
            ..Let's Go Exploring
        </button>
        </div>
      </div>
    )
  }
}



export default withRouter(Welcome);