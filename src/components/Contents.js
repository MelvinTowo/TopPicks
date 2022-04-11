import React, { Component } from 'react'
import './contents.css';

export default class contents extends Component {
  render() {
    return (
        <div className="headDiv"> 
        <section className="containerContents">
            <div class="pickDsp">
                    <div class="pickDsp-image im1"></div>
                    <h3> Mercedes EQS </h3>
                    <p> Simply unbeaten </p>
                </div>
                <div class="pickDsp">
                    <div class="pickDsp-image im2"></div>
                    <h3> A bordeaux red </h3>
                    <p> A dash of red </p>
                </div>
                <div class="pickDsp">
                    <div class="pickDsp-image im3"></div>
                    <h3> Pierres Harbour </h3>
                    <p> The magic of Australia </p>
                </div>
                <div class="pickDsp">
                    <div class="pickDsp-image im4"></div>
                    <h3> R Y J Reserve </h3>
                    <p> Smoking  </p>
                </div>
                <div class="pickDsp">
                    <div class="pickDsp-image im5"></div>
                    <h3> B 757 </h3>
                    <p> An ancient Beast </p>
                </div>
                <div class="pickDsp">
                    <div class="pickDsp-image im6"></div>
                    <h3> Violets  </h3>
                    <p> dashed with Violet! </p>
                </div>
                <div class="pickDsp">
                    <div class="pickDsp-image im7"></div>
                    <h3> Hutchins Ribeye </h3>
                    <p> Tenderness </p>
                </div>
            
        </section>
    </div>
    )
  }
}

