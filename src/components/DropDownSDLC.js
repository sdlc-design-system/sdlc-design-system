import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

class DropdownSDLC extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle 
          className={`
            btn 
            ${this.props.size === 'large' ? 'btn-lg':this.props.size === 'medium' ? 'btn-sm':'btn-xs'} 
            ${this.props.secondary ? 'btn-secondary':'btn-primary'}
          `}
          id="dropdown-basic">
          {this.props.title}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {this.props.content.map((item,index)=>
            <Dropdown.Item
              key = {index}
              href={item.href}
            >
              {item.title}
              {((this.props.divider|0) - 1) === index ? <Dropdown.Divider />:""}
            </Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
export default DropdownSDLC
