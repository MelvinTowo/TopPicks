// import React from 'react';
import {MDBFooter} from 'mdb-react-ui-kit';
import './App.css';
import Footer from './components/footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Explore from './components/Explore';
import AddIcon from '@mui/icons-material/Add';
import BookIcon from '@mui/icons-material/Book';
import Contents from './components/Contents';
import React, { Component } from 'react'



export default class App extends Component {

  state = {
    visible: true
  }

  render() {
// const buttonText = this.state.visible ? <div><AddIcon /></div> : <div><Contents /></div>;

    return (
      <div className="App">
       <NavBar />
         <div className="mainpgContainer">
           <div className="dashTp">
            {this.state.visible ? null : <Contents />}
              <button className="bookButton" onClick={() => {
              this.setState({visible: !this.state.visible})
            }}>

              {/* <{buttonText}> */}
              <BookIcon fontSize="large"/>
            </button>
          </div>
         </div>
       <Footer />
     </div>
    );
  }
}


// function App() {
 
//   return (
//     <div className="App">
//       <NavBar />
//         <div className="mainpgContainer">
//           <Contents />
//         </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;
