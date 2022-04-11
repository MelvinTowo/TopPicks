
import React, { Component } from 'react'
import './Home.css';
import { IconButton } from '@mui/material';
// import IconButton from '@material-ui/core/IconButton';
import BookIcon from '@mui/icons-material/Book';
import { Book } from '@mui/icons-material';


export default class Home extends Component {

  render() {
    return (
      <div className="homePage">
        <a className="tpButton" href="#!">
          <BookIcon fontSize="large" />
        </a>
      </div>
    )
  }
}




{/* <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="open drawer"
      href='https://www.google.com/'
    >
      </IconButton> */}