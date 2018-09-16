import React, {Component} from 'react';
import { connect } from 'react-redux';
import { get_colours } from '../actions';

class ColourBar extends Component{

  renderColours() {
    return this.props.colours.map(colour => {
      return (
        <div className="colourSelection col-lg-3 animated fadeIn" key={colour}>
          <div className="colourOutline" style={{backgroundColor: colour}}>
          </div>
          <div className="colourName">
            {colour}
          </div>
        </div>
      );
    });
  }

  render() {
    return (
    <div className="colourBar ">
      <div className="row">
        {this.renderColours()}
      </div>
    </div>
    );
  }
}

function mapStateToProps({ colours }){
  return { colours };
}

export default connect(mapStateToProps) (ColourBar);
