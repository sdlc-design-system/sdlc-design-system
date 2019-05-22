import React, { Component } from 'react';
import Collapse from 'react-bootstrap/Collapse'
import '../App.scss'
import './Accordian.scss';

// see https://react-bootstrap.github.io/utilities/transitions/#collapse-props
class Accordian extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      openAccordian: [],
    }
    this.props.content.forEach(()=>{
      this.setState({openAccordian: [...this.state.openAccordian,false]})
    })
  }
  handleAccordianChange =(index)=>{
    const openAccordian = [...this.state.openAccordian]
    openAccordian[index] = !openAccordian[index]
    this.setState({
      openAccordian
    })
  }

  render() {
    return (
      <div>
        <br></br>
        {this.props.content.map((item,index)=>
          <div
            key = {index}
            aria-controls="collapse-text"
            aria-expanded={this.state.openAccordian[index]}
            className={this.state.openAccordian[index] ? "undefined":"accordian-hover"}
          >
            <div className="someSpace" onClick={() => { this.handleAccordianChange(index) }}>
              <span className={this.state.openAccordian[index] ? "boldFont":"regularFont"}>{item.title}</span>
              <span className= {this.state.openAccordian[index] ? "upArrow":"downArrow"}></span>
              <hr className= {this.state.openAccordian[index] ? "mediumDivider":"lightDivider"}></hr>
            </div>
            <Collapse in={this.state.openAccordian[index]}>
              <div id="collapse-text">
                {item.content}
              </div>
            </Collapse> 
          </div>
        )}
      </div>
    );
  }
}
export default Accordian
