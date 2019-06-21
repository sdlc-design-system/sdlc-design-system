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
import Panel from './components/Panel'
import ModalSDLC from './components/ModalSDLC'
import Loading from './components/Loading'
import Searchbox from './components/Searchbox'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Color from './components/Color'
import Typography from './components/Typography'
import ButtonsDemo from './components/ButtonsDemo'
import ButtonSDLC from './components/ButtonSDLC'
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

import IconAlert from './svgs/IconAlert'
import IconAlertStopSign from './svgs/IconAlertStopSign'
import IconAnalysis from './svgs/IconAnalysis'
import IconApproveInvoice from './svgs/IconApproveInvoice'
import IconCheck from './svgs/IconCheck'
import IconClose from './svgs/IconClose'
import IconContract from './svgs/IconContract' 
import IconControls from './svgs/IconControls' 
import IconDeleteButton from './svgs/IconDeleteButton' 
import IconDown from './svgs/IconDown' 
import IconFolder from './svgs/IconFolder' 
import IconGraphicTool from './svgs/IconGraphicTool' 
import IconGroup from './svgs/IconGroup' 
import IconInformation from './svgs/IconInformation' 
import IconLeft from './svgs/IconLeft' 
import IconRight from './svgs/IconRight' 
import IconLeftArrow from './svgs/IconLeftArrow' 
import IconRightArrow from './svgs/IconRightArrow' 
import IconLock from './svgs/IconLock' 
import IconMagnifyingGlass from './svgs/IconMagnifyingGlass' 
import IconQuality from './svgs/IconQuality' 
import IconQuestion from './svgs/IconQuestion' 
import IconRunning from './svgs/IconRunning' 
import IconSketch from './svgs/IconSketch' 
import IconSmallUp from './svgs/IconSmallUp' 
import IconSmallDown from './svgs/IconSmallDown' 
import IconSmallLeft from './svgs/IconSmallLeft' 
import IconSmallRight from './svgs/IconSmallRight' 
import IconSolution from './svgs/IconSolution' 
import IconSpinnerOfDots from './svgs/IconSpinnerOfDots' 
import IconStandingUpMan from './svgs/IconStandingUpMan' 
import IconTools from './svgs/IconTools' 
import IconUp from './svgs/IconUp' 
import IconWeb from './svgs/IconWeb' 
import IconTeam from './svgs/IconTeam' 
import IconBlueprint from './svgs/IconBlueprint' 
import IconPhatCheck from './svgs/IconPhatCheck' 
import IconTick from './svgs/IconTick' 
import SdlcLogo from './svgs/SdlcLogo' 
import IconHamburger from './svgs/IconHamburger' 
import IconCopy from './svgs/IconCopy' 

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

