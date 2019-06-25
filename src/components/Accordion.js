import React, { Component } from 'react';
import Collapse from 'react-bootstrap/Collapse'
import '../App.scss'
import './componentStyles/Accordion.scss';
import Up from '../svgs/Up' 
import Down from '../svgs/Down' 

// see https://react-bootstrap.github.io/utilities/transitions/#collapse-props
class Accordion extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      openAccordion: [],
    }
    this.props.content.forEach(()=>{
      this.setState({openAccordion: [...this.state.openAccordion,false]})
    })
  }
  handleAccordionChange =(index)=>{
    const openAccordion = [...this.state.openAccordion]
    openAccordion[index] = !openAccordion[index]
    this.setState({
      openAccordion
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
            aria-expanded={this.state.openAccordion[index]}
            className={this.state.openAccordion[index] ? "undefined":"Accordion-hover"}
            style={{cursor:"pointer"}}
          >
            <div className="accordionTitleSpace" onClick={() => { this.handleAccordionChange(index) }}>
              <span className={this.state.openAccordion[index] ? "labels16":"bodyCopy"}>{item.title}</span>
              <span className= {this.state.openAccordion[index] ? "upArrow":"downArrow"}></span>
              {this.state.openAccordion[index] ? 
                <Up width="15px" fill="#44687d"></Up> : <Down width="15px" fill="#44687d"></Down>
              }
            </div>

              <hr className="accordionContentSpace" />
            <Collapse in={this.state.openAccordion[index]}>
              <div id="collapse-text" className="accordionContentSpace">
                {item.content}
                <div><br></br></div>
              </div>
            </Collapse> 
          </div>
        )}
      </div>
    );
  }
}
export default Accordion
