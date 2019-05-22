import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"

import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Switch from './components/Switch'
import Accordian from './components/Accordian'
import Radio from './components/Radio'

import './App.scss';
import Panel from './components/Panel';
import ModalSDLC from './components/ModalSDLC'

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
      //<div className="container-fluid">
      <div className="container">
  
        <h1>SDLC design system using React-Bootstrap</h1>
        <br/>
        <Row>
          <Col></Col>
          <Col>.btn-primary</Col>
          <Col>.btn-secondary</Col>
          <Col>.btn-primary disabled</Col>
          <Col>.btn-secondary disabled</Col>
        </Row>
        <br/>
        <Row>
          <Col>.btn-lg</Col>
          <Col>
            <Button className="btn btn-lg btn-primary">Default</Button>
            <br/>
            <br/>
            <Dropdown>
              <Dropdown.Toggle className="btn btn-lg btn-primary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Button className="btn btn-lg btn-secondary">Default</Button>
            <br/>
            <br/>
            <Dropdown>
              <Dropdown.Toggle className="btn btn-lg btn-secondary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Button className="btn btn-lg btn-primary" disabled>disabled</Button>
            <br/>
            <br/>
            <Dropdown>
              <Dropdown.Toggle disabled className="btn btn-lg btn-primary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Button className="btn btn-lg btn-secondary" disabled>disabled</Button>
            <br/>
            <br/>
            <Dropdown>
              <Dropdown.Toggle disabled className="btn btn-lg btn-secondary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>.btn-sm</Col>
          <Col>
            <Button className="btn btn-sm btn-primary">Default</Button>
            <br />
            <br />
            <Dropdown>
              <Dropdown.Toggle className="btn btn-sm btn-primary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Button className="btn btn-sm btn-secondary">Default</Button>
            <br/>
            <br/>
            <Dropdown>
              <Dropdown.Toggle className="btn btn-sm btn-secondary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Button className="btn btn-sm btn-primary" disabled>disabled</Button>
            <br/>
            <br/>
            <Dropdown>
              <Dropdown.Toggle disabled className="btn btn-sm btn-primary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Button className="btn btn-sm btn-secondary" disabled>disabled</Button>
            <br/>
            <br/>
            <Dropdown>
              <Dropdown.Toggle disabled className="btn btn-lg btn-secondary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <br/>
  
        <Row>
          <Col>.btn-xs</Col>
          <Col>
            <Button className="btn btn-xs btn-primary">Default</Button>
            <br/>
            <br/>
            <Dropdown>
              <Dropdown.Toggle className="btn btn-xs btn-primary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Button className="btn btn-xs btn-secondary">Default</Button>
            <br/>
            <br/>
            <Dropdown>
              <Dropdown.Toggle className="btn btn-xs btn-secondary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Button className="btn btn-xs btn-primary" disabled>disabled</Button>
            <br/>
            <br/>
            <Dropdown>
              <Dropdown.Toggle disabled className="btn btn-xs btn-primary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Button className="btn btn-xs btn-secondary" disabled>disabled</Button>
            <br/>
            <br/>
            <Dropdown>
              <Dropdown.Toggle disabled className="btn btn-xs btn-secondary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        
        
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

        Heavy, medium & light dividers:
        <hr className="heavyDivider"></hr>
        <hr className="mediumDivider"></hr>
        <hr className="lightDivider"></hr>
        
        <Button className="btn btn-sm btn-primary" onClick={this.handleModalShow}>
          Modal
        </Button>
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
        <br></br>
        
      </div>
    );
  }
}

export default App;

