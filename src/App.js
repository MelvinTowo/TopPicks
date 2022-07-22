
import './App.css';
import React from 'react';
import Signup from './logs/Signup';
import Login from './logs/Login';
import { AuthProvider } from './Contexts/AuthContext';
import { Route, Routes } from 'react-router-dom';
import { About, Home, Favourites, ContactUs, Explore, Faq, Contents} from './Constants'





const App = () => {

  return (
    <>
    <AuthProvider>
      <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          
          <Route path="/About" element={<About />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Favourites" element={<Favourites />} />
          <Route path="/ContactUS" element={<ContactUs />} />
          <Route path="/Explore" element={<Explore/>} />
          <Route path="/FAQ" element={<Faq />} />
          <Route path="/Contents" element={<Contents />} />
      </Routes>

    </AuthProvider>
    </>
  )
}

export default App


//{/* <Route path='/Signup' element={<Signup />} />
//<Route path='/Login' element={<Login />} /> */}

/* <NavBar />
      <AuthProvider> 
        <Routes>
        
        <Route exact path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          
          <Route path="/About" element={<About />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Favourites" element={<Favourites />} />
          <Route path="/ContactUS" element={<ContactUs />} />
          <Route path="/Explore" element={<Explore/>} />
          <Route path="/FAQ" element={<Faq />} />
          <Route path="/Contents" element={<Contents />} />
        </Routes>
       </AuthProvider> */

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





//{/* <div className="mainpgContainer">
        //    <div className="dashTp">
        //     {this.state.visible ? null : <Contents />}
        //       <button className="bookButton" onClick={() => {
        //       this.setState({visible: !this.state.visible})
        //     }}>

        //       {/* <{buttonText}> */}
        //       /*<BookIcon fontSize="large"/>
        //     </button>
        //   </div>
        //  </div> */
        //}