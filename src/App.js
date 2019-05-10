import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import './App.scss';




function App() {
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
        </Col>
        <Col>
          <Button className="btn btn-lg btn-secondary">Default</Button>
        </Col>
        <Col>
          <Button className="btn btn-lg btn-primary" disabled>disabled</Button>
        </Col>
        <Col>
          <Button className="btn btn-lg btn-secondary" disabled>disabled</Button>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col>.btn-sm</Col>
        <Col>
          <Button className="btn btn-sm btn-primary">Default</Button>
        </Col>
        <Col>
          <Button className="btn btn-sm btn-secondary">Default</Button>
        </Col>
        <Col>
          <Button className="btn btn-sm btn-primary" disabled>disabled</Button>
        </Col>
        <Col>
          <Button className="btn btn-sm btn-secondary" disabled>disabled</Button>
        </Col>
      </Row>
      <br/>

      <Row>
        <Col>.btn-xs</Col>
        <Col>
          <Button className="btn btn-xs btn-primary">Default</Button>
        </Col>
        <Col>
          <Button className="btn btn-xs btn-secondary">Default</Button>
        </Col>
        <Col>
          <Button className="btn btn-xs btn-primary" disabled>disabled</Button>
        </Col>
        <Col>
          <Button className="btn btn-xs btn-secondary" disabled>disabled</Button>
        </Col>
      </Row>
      <br />
      <br />
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
        <div className="custom-control custom-radio">
          <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" checked />
          <label className="custom-control-label" for="customRadio1">Toggle this custom radio</label>
        </div>
        <div className="custom-control custom-radio">
          <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
          <label className="custom-control-label" for="customRadio2">Toggle this custom radio</label>
        </div>
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
    </div>
  );
}

export default App;

