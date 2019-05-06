import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import './App.scss';



function App() {
  return (
    //<div className="container-fluid">
    <div className="container">

      <h1>SDLC design system using React-Bootstrap</h1>
      <br/>
      <div class="row">
        <div class="col"></div>
        <div class="col">.btn-primary</div>
        <div class="col">.btn-secondary</div>
        <div class="col">.btn-primary disabled</div>
        <div class="col">.btn-secondary disabled</div>
      </div>
      <br/>
      <div class="row">
        <div class="col">.btn-lg</div>
        <div class="col">
          <Button className="btn btn-lg btn-primary">Default</Button>
        </div>
        <div class="col">
          <Button className="btn btn-lg btn-secondary">Default</Button>
        </div>
        <div class="col">
          <Button className="btn btn-lg btn-primary" disabled>disabled</Button>
        </div>
        <div class="col">
          <Button className="btn btn-lg btn-secondary" disabled>disabled</Button>
        </div>
      </div>
      <br/>
      <div class="row">
        <div class="col">.btn-sm</div>
        <div class="col">
          <Button className="btn btn-sm btn-primary">Default</Button>
        </div>
        <div class="col">
          <Button className="btn btn-sm btn-secondary">Default</Button>
        </div>
        <div class="col">
          <Button className="btn btn-sm btn-primary" disabled>disabled</Button>
        </div>
        <div class="col">
          <Button className="btn btn-sm btn-secondary" disabled>disabled</Button>
        </div>
      </div>
      <br/>

      <div class="row">
        <div class="col">.btn-xs</div>
        <div class="col">
          <Button className="btn btn-xs btn-primary">Default</Button>
        </div>
        <div class="col">
          <Button className="btn btn-xs btn-secondary">Default</Button>
        </div>
        <div class="col">
          <Button className="btn btn-xs btn-primary" disabled>disabled</Button>
        </div>
        <div class="col">
          <Button className="btn btn-xs btn-secondary" disabled>disabled</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
