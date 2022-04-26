import React from 'react'
import './Home.css';
import NavBar from './NavBar';



export default function Home() {
  return (
    
    <div className="homePage">
      <NavBar />
     This is the home page where the site would load all the users currently created TopPicks. Currently there are none for this user!
    </div>
  )
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