import React from 'react';

class Hero extends React.Component {

  render() {
    return (
      <div className="hero row">
        <div className="col-1">
          <img className='thumb' src={this.props.value.thumbnail.path + "." + this.props.value.thumbnail.extension} />
        </div>
        <div className="col-sm">
          <div className="name">{this.props.value.name}</div>
          <div className="desc">{this.props.value.description}</div>
        </div>
      </div>
    );
  }
}

export default Hero;
