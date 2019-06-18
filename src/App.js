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
            <Sidebar 
              content={[
                {id:'colors',title:'Colors',indent:'0'},
                {id:'typography',title:'Typography'},
                {id:'icons', title:'Icons'},
                {id:'buttons',title:'Buttons'},
                {id:'forms',title:'Forms'},
                {id:'containers',title:'Containers'},
                {id:'content',title:'Content'},


              ]}

            />
            <div className="main">
            <Col className="main" style={{height:"1500px"}}>
              <div id="colors-section" ref="colors-section" className="anchor"></div>
              <Color/>
              <div id="typography-section" ref="typography-section" className="anchor"></div>
              <Typography/>
              <div id="icons-section" ref="icons-section" className="anchor"></div>
              <IconsDemo />
              <div id="buttons-section" ref="buttons-section" className="anchor"></div>
              <ButtonsDemo />
              <div id="forms-section" ref="forms-section" className="anchor"></div>
              <FormsDemo />
              <StandardInputDemo />
              <DropDownDemo />
              <RadioButtonsDemo />
              <CheckBoxDemo />
              <SwitchDemo />
              <div id="containers-section" ref="containers-section" className="anchor"></div>
              <h2>Containers</h2>
              <div id="panel-section" ref="panel-section" className="anchor"></div>
              <PanelDemo />
              <div id="accordions-section" ref="accordions-section" className="anchor"></div>
              <AccordionsDemo />
              <div id="modal-section" ref="modal-section" className="anchor"></div>
              <ModalDemo />
              <div id="content-section" ref="content-section" className="anchor"></div>
              <h2>Content</h2>
              <DividersDemo />
              <br></br>
              <LoadingDemo />
              
              <div></div>
              <h2 id="icons-section" ref="icons-section" className="anchor">Icons</h2>
              <div>Messaging</div>
              <Row>
                <span className="spacer"><IconPhatCheck width="25px" fill="black" /></span>
                <span className="spacer"><IconAlertStopSign width="25px" fill="Black" /></span>
                <span className="spacer"><IconQuestion width="25px" fill="black" /></span>
                <span className="spacer"><IconInformation width="25px" fill="black" /></span>
                <span className="spacer"><IconCheck width="25px" fill="black" /></span>
                <span className="spacer"><IconAlert width="25px" fill="black" /></span>
              </Row>
              <div>Arrows</div>
              <Row>
                <span className="spacer"><IconLeftArrow width="25px" fill="black" /></span>
                <span className="spacer"><IconRightArrow width="25px" fill="black" /></span>
                <span className="spacer"><IconDown width="25px" fill="black" /> </span>
                <span className="spacer"><IconLeft width="25px" fill="black" /> </span>
                <span className="spacer"><IconRight width="25px" fill="black" /> </span>
                <span className="spacer"><IconUp width="25px" fill="black" /> </span>
                <span className="spacer"><IconSmallUp width="15px" fill="black" /> </span>
                <span className="spacer"><IconSmallLeft width="15px" fill="black" /> </span>
                <span className="spacer"><IconSmallRight width="15px" fill="black" /> </span>
                <span className="spacer"><IconSmallDown width="15px" fill="black" /> </span>
              </Row>
              <div>Actions</div>
              <Row>
                <span className="spacer"><IconTick width="25px" fill="black" /></span>
                <span className="spacer"><IconClose width="25px" fill="black" /></span>
                <span className="spacer"><IconDeleteButton width="25px" fill="black" /></span>
                <span className="spacer"><IconMagnifyingGlass width="25px" fill="black" /></span>
                <span className="spacer"><IconSpinnerOfDots width="25px" fill="black" /></span>
                <span className="spacer"> <IconCopy width="25px" fill="black" /></span>

              </Row>
              <div>Human</div>
              <Row>
                <span className="spacer"><IconStandingUpMan width="25px" fill="black" /></span>
                <span className="spacer"><IconRunning width="25px" fill="black" /></span>
                <span className="spacer"><IconTeam width="25px" fill="black" /></span>
                <span className="spacer"><IconGroup width="25px" fill="black" /></span>
              </Row>
              <div>Work</div>
              <Row>
                <span className="spacer"><IconApproveInvoice width="25px" fill="black" /></span>
                <span className="spacer"><IconBlueprint width="25px" fill="black" /></span>
                <span className="spacer"><IconContract width="25px" fill="black" /></span>
                <span className="spacer"><IconAnalysis width="25px" fill="black" /></span>
                <span className="spacer"><IconQuality width="25px" fill="black" /></span>
                <span className="spacer"><IconFolder width="25px" fill="black" /></span>
                <span className="spacer"><IconGraphicTool width="25px" fill="black" /></span> 

                {/* <IconControls width="25px" fill="black" /></span> */}
                <span className="spacer"><IconSketch width="25px" fill="black" /></span>
                <span className="spacer"><IconSolution width="25px" fill="black" /></span>
                <span className="spacer"><IconTools width="25px" fill="black" /></span>
                <span className="spacer"><IconWeb width="25px" fill="black" /></span>
              </Row>
              <div>Other</div>
              <Row>
                <span className="spacer"> <IconLock width="25px" fill="black" /></span>
                <span className="spacer"> <IconHamburger width="25px" fill="black" /></span>

              </Row>
              <SdlcLogo width="103px"></SdlcLogo>

            </Col>
          </div>
          </Row>
          
        </Container>
      </div>
    );
  }
}

export default App;

