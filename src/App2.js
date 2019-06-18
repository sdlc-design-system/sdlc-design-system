import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
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
    this.setState({ showModal: true });
  }

  render(){
    return (
      <div className="wrapper">
        
        {/* <!-- Sidebar --> */}
        <Nav id="sidebar">
          <div class="wrapper">
          {/* <!-- Sidebar  --> */}
          <nav id="sidebar">
              <div class="sidebar-header">
                  <h3>Bootstrap Sidebar</h3>
              </div>

              <ul class="list-unstyled components">
                  <p>Dummy Heading</p>
                  <li class="active">
                      <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                      <ul class="collapse list-unstyled" id="homeSubmenu">
                          <li>
                              <a href="#">Home 1</a>
                          </li>
                          <li>
                              <a href="#">Home 2</a>
                          </li>
                          <li>
                              <a href="#">Home 3</a>
                          </li>
                      </ul>
                  </li>
                  <li>
                      <a href="#">About</a>
                  </li>
                  <li>
                      <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                      <ul class="collapse list-unstyled" id="pageSubmenu">
                          <li>
                              <a href="#">Page 1</a>
                          </li>
                          <li>
                              <a href="#">Page 2</a>
                          </li>
                          <li>
                              <a href="#">Page 3</a>
                          </li>
                      </ul>
                  </li>
                  <li>
                      <a href="#">Portfolio</a>
                  </li>
                  <li>
                      <a href="#">Contact</a>
                  </li>
              </ul>

              <ul class="list-unstyled CTAs">
                  <li>
                      <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a>
                  </li>
                  <li>
                      <a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a>
                  </li>
              </ul>
          </nav>

          {/* <!-- Page Content  --> */}
          <div id="content">

              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <div class="container-fluid">

                      <button type="button" id="sidebarCollapse" class="btn btn-info">
                          <i class="fas fa-align-left"></i>
                          <span>Toggle Sidebar</span>
                      </button>
                      <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <i class="fas fa-align-justify"></i>
                      </button>

                      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul class="nav navbar-nav ml-auto">
                              <li class="nav-item active">
                                  <a class="nav-link" href="#">Page</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="#">Page</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="#">Page</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="#">Page</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>

              <h2>Collapsible Sidebar Using Bootstrap 4</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              <div class="line"></div>

              <h2>Lorem Ipsum Dolor</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              <div class="line"></div>

              <h2>Lorem Ipsum Dolor</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              <div class="line"></div>

              <h3>Lorem Ipsum Dolor</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
      </div>
        </Nav>

        {/* <!-- Page Content --> */}
        <div id="content">
            {/* <!-- We'll fill this with dummy content --> */}
        </div>
      </div>
    );
  }
}

export default App;