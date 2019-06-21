import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container'
// import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Switch from './components/Switch'
import Accordion from './components/Accordion'
import Radio from './components/Radio'
import './App.scss';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Color from './components/Color'
import Typography from './components/Typography'
import ButtonsDemo from './components/ButtonsDemo'
import PanelDemo from './components/PanelDemo' 
import AccordionsDemo from './components/AccordionsDemo' 
import ModalDemo from './components/ModalDemo' 
import FormsDemo from './components/FormsDemo' 
import StandardInputDemo from './components/StandardInputDemo' 
import DropDownDemo from './components/DropDownDemo' 
import RadioButtonsDemo from './components/RadioButtonsDemo' 
import CheckBoxDemo from './components/CheckBoxDemo' 
import SwitchDemo from './components/SwitchDemo' 
import DividersDemo from './components/DividersDemo' 
import LoadingDemo from './components/LoadingDemo'
import IconsDemo from './components/IconsDemo'
 

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    return (
      <div>
        <Header />
        <Container fluid style={{marginLeft: "10px"}}>
          <Row>
            <Sidebar />
            <div className="main">
            <Col className="main" style={{height:"1500px"}}>
              <div id="colors" ref="colors" className="anchor"></div>
              <div style={{paddingTop:"88px"}}><Color /></div>
              <div id="typography" ref="typography" className="anchor"></div> 
              <Typography />
              <div id="icons" ref="icons" className="anchor"></div>
              <IconsDemo />
              <div id="buttons" ref="buttons" className="anchor"></div>
              <ButtonsDemo />
              <div id="forms" ref="forms" className="anchor"></div>
              <FormsDemo />
              <div id="standardInput" ref="standardInput" className="anchor"></div>
              <StandardInputDemo />
              <div id="dropdownMenu" ref="dropdownMenu" className="anchor"></div>
              <DropDownDemo />
              <div id="radioButtons" ref="radioButtons" className="anchor"></div>
              <RadioButtonsDemo />
              <div id="checkbox" ref="checkbox" className="anchor"></div>
              <CheckBoxDemo />
              <div id="switch" ref="switch" className="anchor"></div>
              <SwitchDemo />
              <div id="containers" ref="containers" className="anchor"></div>
              <h2>Containers</h2>
              <div id="panel" ref="panel" className="anchor"></div>
              <PanelDemo />
              <div id="accordion" ref="accordion" className="anchor"></div>
              <AccordionsDemo />
              <div id="modal" ref="modal" className="anchor"></div>
              <ModalDemo />
              <div id="content" ref="content" className="anchor"></div>
              <h2>Content</h2>
              <div id="dividers" ref="dividers" className="anchor"></div>
              <DividersDemo />
              <div id="loadingIndicator" ref="loadingIndicator" className="anchor"></div>
              <LoadingDemo />
              

            </Col>
          </div>
          </Row>
          
        </Container>
      </div>
    );
  }
}

export default App;

