import React, {Component} from 'react';
import Dropzone from 'react-dropzone'
import request from "superagent";

class UploadForm extends Component{
  constructor() {
    super()
    this.state = { files: [], accepted: [], rejected: []}
  }

  onDrop = (files) => {
    // POST to a test endpoint for demo purposes
    const req = request.post('/api/test_upload');

    files.forEach(file => {
      req.attach('file', file);
    });
    req.then(
      res => {
        console.log(JSON.stringify(res.body));
     });
  }

  render() {
    return (
      <section className="dragArea">
        <div >
          <Dropzone className="box" accept="image/jpeg, image/png" onDrop={this.onDrop.bind(this)}>
          <svg className="box__icon" viewBox="0 0 24 24">
              <path fill="#93deff" d="M14,13V17H10V13H7L12,8L17,13M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z" />
          </svg>
            <p>Drag an image here!</p>
          </Dropzone>
        </div>
      </section>
    );
  }
}

export default UploadForm;
