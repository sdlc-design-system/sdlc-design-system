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

import Alert from './svgs/Alert'
import StopSign from './svgs/StopSign'
import Analysis from './svgs/Analysis'
import ApproveInvoice from './svgs/ApproveInvoice'
import RoundCheck from './svgs/RoundCheck'
import Close from './svgs/Close'
import Contract from './svgs/Contract' 
import Controls from './svgs/Controls' 
import Delete from './svgs/Delete' 
import Down from './svgs/Down' 
import Folder from './svgs/Folder' 
import GraphicTool from './svgs/GraphicTool' 
import Group from './svgs/Group' 
import Information from './svgs/Information' 
import Left from './svgs/Left' 
import Right from './svgs/Right' 
import LeftArrow from './svgs/LeftArrow' 
import RightArrow from './svgs/RightArrow' 
import Lock from './svgs/Lock' 
import SearchIcon from './svgs/SearchIcon' 
import Quality from './svgs/Quality' 
import Question from './svgs/Question' 
import Running from './svgs/Running' 
import Sketch from './svgs/Sketch' 
import SmallUp from './svgs/SmallUp' 
import SmallDown from './svgs/SmallDown' 
import SmallLeft from './svgs/SmallLeft' 
import SmallRight from './svgs/SmallRight' 
import Solution from './svgs/Solution' 
import Spinner from './svgs/Spinner' 
import Standing from './svgs/Standing' 
import Tools from './svgs/Tools' 
import Up from './svgs/Up' 
import Web from './svgs/Web' 
import Team from './svgs/Team' 
import Blueprint from './svgs/Blueprint' 
import Check from './svgs/Check' 
import Tick from './svgs/Tick' 
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