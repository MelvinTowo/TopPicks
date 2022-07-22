import React from 'react'
import NavBar from '../../components/NavBar';
import './About.css';


const About = () => {
  return (
    <>
    <NavBar />
      <div className="app__about-container">
      <h1>Welcome to the about page</h1>
        <p>This is TopPicks, a pintrest Yelp baby that was born into the world to help users organize a collection of hobbies, interests and anything in between</p>
        <p>On this website, you can have fun customizing, adding and reviewing a variety of TopPicks from other users, and share information with local communities or people of the same interest as you.
            If you would like to learn more about the individual creators, hit the link below.
        </p>
      </div>
    </>
  )
}

export default About




