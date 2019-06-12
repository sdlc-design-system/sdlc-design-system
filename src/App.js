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
import Accordian from './components/Accordian'
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
import Button from './components/Button'


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
    this.state = {
      switchState:false,
      showModal: false,
    }
  }
  handleSwitchChange = ()=> {
    this.setState({ switchState: !this.state.switchState })
  }

  handleModalClose=()=> {
    this.setState({ showModal: false });
  }

  handleModalShow=()=> {
    console.log("OLD MAN NEILL")
    this.setState({ showModal: true });
  }

  render(){
    return (
      <div>
        <Header />
        <Container fluid style={{marginLeft: "10px"}}>
          <Row>
            <Sidebar 
              content={[
                {id:'colors',title:'Colors'},
                {id:'typography',title:'Typography'},
                {id:'buttons',title:'Buttons'},
                {id:'icons', title:'Icons'}
              ]}

            />
            <div className="main">
            <Col className="main" style={{height:"1500px"}}>
              <div id="colors-section" className="anchor"></div>
              <Color/>
              <div id="typography-section" className="anchor"></div>
              <Typography/>
              <div id="buttons-section" ref="buttons-section" className="anchor"></div>
              <ButtonsDemo />
              
              
              
              <br></br>
              <Form>
                <Row>
                  <Col>
                    <input className="SDLC-form"
                      placeholder="Placeholder Text...">
                    </input>
                  </Col>
                  <Col>
                    <input
                      placeholder="error"
                      className="inputError SDLC-form">
                    </input>
                  </Col>
                  <Col>
                    <input 
                      className="inputSuccess SDLC-form"
                      placeholder="success">
                    </input>
                  </Col>
                  <br />
                  <br />
                  <Col>
                    <input
                      placeholder="disabled" disabled
                      className="SDLC-form">
                      
                    </input>
                  </Col>
                </Row>
              </Form>
                
              <Form>
                <div className="wrapper">
                  <input id="a11y-issue-1" name="a11y-issues" type="checkbox" value="no-issues" /> 
                  <label for="a11y-issue-1">First check/toggle</label>
                </div>
                <div className="wrapper">
                  <input id="a11y-issue-2" name="a11y-issues" type="checkbox" value="no-focus-styles" />
                  <label for="a11y-issue-2">Second check/toggle</label>
                </div>
              </Form>

              <Radio content={[
                {content:'radio toggle one'},
                {content:'radio toggle two'},
                {content:'radio toggle three'},
              ]}/>

              <Switch isChecked={ this.state.switchState }
                      handleSwitchChange={this.handleSwitchChange} 
              />The switch is {this.state.switchState ? "on":"off"}
        
              <Accordian
                content={[
                  {title:'Label 1',content:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'},
                  {title:'Label 2',content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
                  {title:'Label 3',content:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'}
                ]} 
              />

              <Panel
                content={[
                  {title:'Label 1',content:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'},
                  {title:'Label 2',content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
                  {title:'Label 3',content:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'}
                ]} 
              />  
              <br />
              Heavy & light dividers:
              <hr className="heavyDivider"></hr>
              <hr className="lightDivider"></hr>
              
              <Button onClick={this.handleModalShow} size="largeButton" buttonStyle="primaryButton" text="Modal"></Button>
              {this.state.showModal ? 
                <ModalSDLC
                  showModal = {this.state.showModal}
                  handleModalClose = {this.handleModalClose}
                  handleModalShow = {this.handleModalShow}
                  buttonOnRightTitle = "Confirm"//custom content here
                  buttonOnRightAction = {this.handleModalClose}//custom handle click here
                  title = "Title"
                  content= "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."
                /> : null
              }
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
              <div>Loading Indicator</div>
              <Loading width="24px" />
            </Col>
          </div>
          </Row>
          
        </Container>
      </div>
    );
  }
}

export default App;

