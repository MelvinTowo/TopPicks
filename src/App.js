
// import './App.css';
import React, { Component } from 'react';
import Signup from './logs/Signup';
import Login from './logs/Login';
import { AuthProvider } from './Contexts/AuthContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Home from './components/Home';
import Favourites from './components/Favourites';
import Faq from './components/Faq';
import ContactUS from './components/ContactUS';
import Contents from './components/Contents';
import NavBar from './components/NavBar';
import Footer from './components/footer';
import Explore from './components/Explore';

export default class App extends Component {

  render() {

    return (
      <div style={{maxHeight: "100wh"}}>
        <AuthProvider>
          
          <Routes>
            <Route exact path='/Dashboard/*' element = {
            <div> 
            <Dashboard />
            </div> 
            } />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/' element={<Login />} />
            <Route path='/Login' element={<Login />} />
            <Route path="/About" element={<About />} />
            <Route path='/Home' element={<Home />}></Route>
            <Route path='/Favourites' element={<Favourites />}></Route>
            <Route path='/ContactUS' element={<ContactUS />}></Route>
            <Route path='/Explore' element={<Dashboard />} />
            <Route path='/FAQ' element={<Faq />}></Route>
            <Route path='/Contents' element={<Contents />}></Route>
          </Routes>
        </AuthProvider>
      </div>
      
      
      
      
    );
  }
}


{/* <Route path='/Signup' element={<Signup />} />
<Route path='/Login' element={<Login />} /> */}


// function App() {
// className="d-flex align-items-center justify-content-center" -contaier style
// className="w-100" style={{maxWidth: '400px'}} -div style
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





{/* <div className="mainpgContainer">
           <div className="dashTp">
            {this.state.visible ? null : <Contents />}
              <button className="bookButton" onClick={() => {
              this.setState({visible: !this.state.visible})
            }}>

              {/* <{buttonText}> */}
              /*<BookIcon fontSize="large"/>
            </button>
          </div>
         </div> */
        //}