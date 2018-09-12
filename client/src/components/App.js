import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/App.css';
import UploadForm from './UploadForm';
import Footer from './Footer';
import ColourBar from './ColourBar';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Colour Summarizer</h1>
        <p>A precise colour extraction algorithm utilizing K Means.</p>

        <br></br>
        <div className="upload-zone">
          <div className="container ">
            <div className="row">
              <div className="col-lg-2 ">
              </div>
              <div className="col-lg-8 drop">
                  <UploadForm/>
              </div>
            </div>
            <ColourBar/>
          </div>
        </div>

        <Footer/>
      </div>
    );
  }
}

export default App;
