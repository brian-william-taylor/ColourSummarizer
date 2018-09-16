import React, {Component} from 'react';
import Dropzone from 'react-dropzone'

import { connect } from 'react-redux';
import * as actions from '../actions';

class UploadForm extends Component{
  constructor() {
    super()
    this.state = { fileSource: ''}
  }

  renderLoader()
  {
    console.log(this.props.colours);
    if(this.props.colours.length === 0)
    {
      return(
        <div className="sk-circle box__loader">
          <div className="box__loader_background"></div>
          <div className="sk-circle1 sk-child"></div>
          <div className="sk-circle2 sk-child"></div>
          <div className="sk-circle3 sk-child"></div>
          <div className="sk-circle4 sk-child"></div>
          <div className="sk-circle5 sk-child"></div>
          <div className="sk-circle6 sk-child"></div>
          <div className="sk-circle7 sk-child"></div>
          <div className="sk-circle8 sk-child"></div>
          <div className="sk-circle9 sk-child"></div>
          <div className="sk-circle10 sk-child"></div>
          <div className="sk-circle11 sk-child"></div>
          <div className="sk-circle12 sk-child"></div>
        </div>
      );
    }
  }

  renderUploadBox()
  {
    if(!(this.state.fileSource === '' || this.state.fileSource == null))
    {
      return(
      <div>
        <img className="uploadImage" src={this.state.fileSource} />
        {this.renderLoader()}
      </div>

      );
    }
    else{
      return(
        <div className="dropzone-preview">
          <svg className="box__icon" viewBox="0 0 24 24">
                <path fill="#93deff" d="M14,13V17H10V13H7L12,8L17,13M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z" />
          </svg>
          <p>Drag an image here!</p>
        </div>
      );
    }
  }


  onDrop = (files) => {
    this.setState({
      file: files[0],
      fileSource: files[0].preview
    });

    this.props.clearColours();
    this.props.uploadImage(files[0]);
  }

  render() {
    return (
      <section className="dragArea">
        <div>
          <Dropzone className={"box " + (this.state.fileSource != '' ?  'box_filled' : '')} multiple={false} accept="image/jpeg, image/png" onDrop={this.onDrop.bind(this)}>
          {this.renderUploadBox()}
          </Dropzone>
        </div>
      </section>
    );
  }
}

function mapStateToProps({ colours }){
  return { colours };
}

export default connect(mapStateToProps, actions)(UploadForm);
