import React from 'react'
import Footer from './footer';
import NavBar from './NavBar';
import Explore from './Explore';
import {BrowserRouter as Router, Routes, Route, useNavigate, Link} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Favourites from './Favourites';
import ContactUS from './ContactUS';
import Faq from './Faq';
import Contents from './Contents';
export default function Dashboard() {
  return (
    <>
    <NavBar />
    <Explore />
    </>
  )
}

