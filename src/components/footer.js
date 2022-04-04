
import React, { Component } from 'react';
import {MDBFooter} from 'mdb-react-ui-kit';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon
  } from 'mdb-react-ui-kit';
import logo from './Screenshot.png';


export default class footer extends Component {
  render() {
    return (
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='www.facebook.com' className='me-4 text-reset'>
            <i className='fab fa-facebook'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-google'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-github'></i>
          </a>
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>TopPicks
              </h6>
              <p>
                Find more ways to share TopPick tags with your friends or on other Socials!
              </p>
              <img src={logo} width="200" height="100"></img>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
              <p>
                <a href='#!' className='text-reset'>
                  TopPicks 
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Report a problem
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Frequently asked questions
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Location services
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Promotion
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Terms of use
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Privacy policy
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> Texas, TX 76203-5017, US
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                info@example.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> + 01 940 564 2000
              </p>
              <p>
                <i className='fas fa-print me-3'></i> + 01 940 369 8652
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          TopPicks.com
        </a>
      </div>
    </MDBFooter>
    )
  }
}
