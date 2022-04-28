import React, { Component } from 'react'
import NavBar from './NavBar'
import './ContactUs.css'

export default class ContactUS extends Component {
  render() {
    return (
      <>
      <NavBar />
      
      <div className="container">
        
        <div className="contact">
          <h2>Contact Us</h2>
          <p>Have a question? Need a tip? You can find a host of brilliant articles in 
            our knowledge base. If you can't find what your looking for, we'd be happy to 
            point you in the right direction. Please feel free to send us an email or even 
            give us a call at 1.940.369.8652.
          </p>
        </div>
      </div>
      </>
    )
  }
}
