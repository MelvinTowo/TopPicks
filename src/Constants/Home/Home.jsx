import React, { Component } from 'react'
import NavBar from '../../components/NavBar';
import './Home.css';



export default class Home extends Component {
  render() {
    return (
      
      <div className="homePage">
        <NavBar />
        <section className="Hsection">
          <div className="tPicks">
            <div className="tPicks-image"></div>
            <h3>Cakes</h3>
          </div>
          <div className="tPicks">
            <div className="tPicks-image"></div>
            <h3>Cars</h3>
          </div>
          <div className="tPicks">
            <div className="tPicks-image"></div>
            <h3>Cheese</h3>
          </div>
          <div className="tPicks">
            <div className="tPicks-image"></div>
            <h3>Airplanes!</h3>
          </div>
          <div className="tPicks">
            <div className="tPicks-image"></div>
            <h3>Fruits</h3>
          </div>
          <div className="tPicks">
            <div className="tPicks-image"></div>
            <h3>MARVEL!</h3>
          </div>
        </section>
      </div>
    )
  }
}






//{
  /* <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="open drawer"
      href='https://www.google.com/'
    >
      </IconButton> *///}









      // <div className="loginBox">
      //   <form id="loginForm" className="input">
      //     <div>
            
      //       <input type="text" placeholder="Email ID" className="input-Field" name="username" required></input>
            
      //       <input type="password" placeholder="Password" className="input-Field" name="password"  required></input> 
      //       <button className="submitBtn" type="submit" onClick={this.login}> login </button>
      //       <button className="submitBtn" type="submit" onClick={this.signup}>Sign up</button>
      //       {/* <input type="checkbox" checked="checked">I agree with terms and conditions</input> */}
      //       {/* <button type="button" checked="cancelbtn">Cancel</button> */}
      //       Forgot <a href="#">Password?</a>
            
      //     </div>
      //   </form>
      // </div>






  //       login() {
  //   const email = document.querySelector("#email").value;
  //   const password = document.querySelector("#password").value;

  //   fire.auth().signInWithEmailAndPassword(email, password).then((u) => {
  //     console.log("Logged in successfully");
  //   })
  //   .catch((err) => {
  //     console.log("Error: " + err.toString());
  //   })
  // }

  // signup() {
  //   const email = document.querySelector("#email").value;
  //   const password = document.querySelector("#password").value;

  //   fire.auth().createUserWithEmailAndPassword(email, password).then((u) => {
  //     console.log("signed up successfully");
  //   })
  //   .catch((err) => {
  //     console.log("Error: " + err.toString());
  //   })
  // }