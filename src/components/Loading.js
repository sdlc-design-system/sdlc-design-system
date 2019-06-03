import React from 'react';
import './componentStyles/Loading.scss';

class Loading extends React.Component {
  constructor ( props ) {
    super( props );
  }
  render () {
    return(
      <div className="loading" style={{width:this.props.width || "30px", height:this.props.width || "30px"}}>
      </div>
    );
  }
} 
export default Loading