import React from 'react';

class SmallMenu extends React.Component {
  constructor ( props ) {
    super( props );
  }
  handleClick = item => {
    this.props.onTabClick(item);
  };
  render () {
    return(
      <div >
        <div className='typography'>hey
        <div><a href="#colors">Colors</a></div>
          <div><a href="#typography">Typography</a></div>
          <div><a href="#icons">Icons</a></div>
          <div><a href="#buttons">Buttons</a></div>
        </div>
      </div>
    );
  }
} 
export default SmallMenu