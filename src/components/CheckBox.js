import React from 'react';
import Form from "react-bootstrap/Form"
import './componentStyles/CheckBox.scss';

class CheckBox extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <Form>
        {this.props.content.map((item,index)=>
          <div className="wrapper">
            <input  type="radio" 
                    id={`checkbox-${item.name}-${index}`} 
                    name={item.name}
                    type="checkbox"
                    value={item.value}
                    key={`checkbox-${item.name}-${index}`}
            />
            <label for={`checkbox-${item.name}-${index}`} >{item.content}</label>
          </div>
        )}
      </Form>
    );
  }
}
export default CheckBox
