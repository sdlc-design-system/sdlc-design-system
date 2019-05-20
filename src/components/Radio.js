import React, { Component } from 'react';
import Form from "react-bootstrap/Form"
import '../App.scss'
import './Radio.scss';

class Radio extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      checked: [true,...Array(this.props.content.length-1).fill(false)],
      reset:Array(this.props.content.length).fill(false)
    }
  }
  
  handleRadioChange =(index)=>{
    const checked = [...this.state.reset]
    checked[index] = true
    this.setState({
      checked
    })
  }

  render() {
    return (
      <Form>
        {this.props.content.map((item,index)=>
          <div className="custom-control custom-radio">
            <input  type="radio" 
                    id={`customRadio-${index}`} 
                    name="customRadio" 
                    className="custom-control-input" 
                    checked={this.state.checked[index]}
                    onChange={()=>this.handleRadioChange(index)}
                    key={`customRadio-${index}`}
            />
            <label className="custom-control-label" for={`customRadio-${index}`}>{item.content}</label>
          </div>
        )}
      </Form>
    );
  }
}
export default Radio
