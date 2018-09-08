import React, { Component } from 'react';
import Dropzone from 'dropzone';
import logo from '../logo.svg';
import '../style/App.css';

class App extends Component {
  createDropzone()
  {
    var dropzone = new Dropzone('#demo-upload', {
      previewTemplate: document.querySelector('#preview-template').innerHTML,
      parallelUploads: 2,
      thumbnailHeight: 120,
      thumbnailWidth: 120,
      maxFilesize: 3,
      filesizeBase: 1000,
      thumbnail: function(file, dataUrl) {
        if (file.previewElement) {
          file.previewElement.classList.remove("dz-file-preview");
          var images = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
          for (var i = 0; i < images.length; i++) {
            var thumbnailElement = images[i];
            thumbnailElement.alt = file.name;
            thumbnailElement.src = dataUrl;
          }
          setTimeout(function() { file.previewElement.classList.add("dz-image-preview"); }, 1);
        }
      }
    });
  }


  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1>Colour Summarizer</h1>
              <p>A precise color extraction algorithm utilizing K Means.</p>
            </div>
            <div className="col-lg-6">
            </div>
          </div>
        </div>

        <br></br>

        <div className="container">
          <div className="row">
            <div className="col-lg-2 ">
            </div>
            <div className="col-lg-8 drop">
              <form action="/api/test_upload"  encType="multipart/form-data" method="post" className="dropzone" id="demo-upload">
              </form>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="container">
            <span className="text-muted">Place sticky footer content here.</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
