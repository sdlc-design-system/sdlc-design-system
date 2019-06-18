import React from 'react';
import './componentStyles/ButtonSDLC.scss';


class ButtonSDLC extends React.Component {
  constructor ( props ) {
    super( props );
  }
  render () {
    return(
        <button 
          disabled={this.props.disabled} 
          icon={this.props.icon} 
          onClick={this.props.onClick} 
          className={`button ${this.props.size} ${this.props.buttonStyle}`}
        >
          {this.props.icon}
          {this.props.icon ? <div>&nbsp;</div> :""}
          {this.props.text}
        </button>
    );
  }
}
export default ButtonSDLC