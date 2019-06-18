import React from 'react';
import './componentStyles/Switch.scss';

class Switch extends React.Component {
  constructor ( props ) {
    super( props );
  }
  render () {
    return(
      <div className="switch-container">
        <label>
          <input ref="switch" onChange={ this.props.handleSwitchChange } className="switch" type="checkbox" />
          <div>
            <div>

            </div>
          </div>
        </label>
      </div>
    );
  }
}
export default Switch