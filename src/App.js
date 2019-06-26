import React, { Component, createRef } from 'react';

import Container from 'react-bootstrap/Container';
import './App.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Color from './components/Color';
import Typography from './components/Typography';
import ButtonsDemo from './components/ButtonsDemo';
import PanelDemo from './components/PanelDemo';
import AccordionsDemo from './components/AccordionsDemo';
import ModalDemo from './components/ModalDemo';
import FormsDemo from './components/FormsDemo';
import StandardInputDemo from './components/StandardInputDemo';
import DropDownDemo from './components/DropDownDemo';
import RadioButtonsDemo from './components/RadioButtonsDemo';
import CheckBoxDemo from './components/CheckBoxDemo';
import SwitchDemo from './components/SwitchDemo';
import DividersDemo from './components/DividersDemo';
import LoadingDemo from './components/LoadingDemo';
import IconsDemo from './components/IconsDemo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'colors'
    };

    this.colorsRef = createRef();
    this.typographyRef = createRef();
    this.iconsRef = createRef();
    this.buttonsRef = createRef();
    this.formsRef = createRef();
    this.standardInputRef = createRef();
    this.dropdownRef = createRef();
    this.radioRef = createRef();
    this.checkboxRef = createRef();
    this.switchRef = createRef();
    this.containersRef = createRef();
    this.panelRef = createRef();
    this.accordionRef = createRef();
    this.modalRef = createRef();
    this.contentRef = createRef();
    this.dividersRef = createRef();
    this.loadingRef = createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = e => {
    const activePoint = window.innerHeight / 2;

    let colorsTop = this.colorsRef.current.getBoundingClientRect().top;
    let typographyTop = this.typographyRef.current.getBoundingClientRect().top;
    let iconsTop = this.iconsRef.current.getBoundingClientRect().top;
    let buttonsTop = this.buttonsRef.current.getBoundingClientRect().top;
    let formsTop = this.formsRef.current.getBoundingClientRect().top;
    let standardInputTop = this.standardInputRef.current.getBoundingClientRect()
      .top;
    let dropdownTop = this.dropdownRef.current.getBoundingClientRect().top;
    let radioTop = this.radioRef.current.getBoundingClientRect().top;
    let checkboxTop = this.checkboxRef.current.getBoundingClientRect().top;
    let switchTop = this.switchRef.current.getBoundingClientRect().top;
    let containerTop = this.containersRef.current.getBoundingClientRect().top;
    let panelTop = this.panelRef.current.getBoundingClientRect().top;
    let accordionTop = this.accordionRef.current.getBoundingClientRect().top;
    let modalTop = this.modalRef.current.getBoundingClientRect().top;
    let contentTop = this.contentRef.current.getBoundingClientRect().top;
    let dividersTop = this.dividersRef.current.getBoundingClientRect().top;
    let loadingTop = this.loadingRef.current.getBoundingClientRect().top;

    let colorsBottom = this.colorsRef.current.getBoundingClientRect().bottom;
    let typographyBottom = this.typographyRef.current.getBoundingClientRect()
      .bottom;
    let iconsBottom = this.iconsRef.current.getBoundingClientRect().bottom;
    let buttonsBottom = this.buttonsRef.current.getBoundingClientRect().bottom;
    let formsBottom = this.formsRef.current.getBoundingClientRect().bottom;
    let standardInputBottom = this.standardInputRef.current.getBoundingClientRect()
      .bottom;
    let dropdownBottom = this.dropdownRef.current.getBoundingClientRect()
      .bottom;
    let radioBottom = this.radioRef.current.getBoundingClientRect().bottom;
    let checkboxBottom = this.checkboxRef.current.getBoundingClientRect()
      .bottom;
    let switchBottom = this.switchRef.current.getBoundingClientRect().bottom;
    let containerBottom = this.containersRef.current.getBoundingClientRect()
      .bottom;
    let panelBottom = this.panelRef.current.getBoundingClientRect().bottom;
    let accordionBottom = this.accordionRef.current.getBoundingClientRect()
      .bottom;
    let modalBottom = this.modalRef.current.getBoundingClientRect().bottom;
    let contentBottom = this.contentRef.current.getBoundingClientRect().bottom;
    let dividersBottom = this.dividersRef.current.getBoundingClientRect()
      .bottom;
    let loadingBottom = this.loadingRef.current.getBoundingClientRect().bottom;

    if (colorsTop < activePoint && colorsBottom > activePoint)
      this.setState({ ...this.state, activeTab: 'colors' });
    if (typographyTop < activePoint && typographyBottom > activePoint)
      this.setState({ ...this.state, activeTab: 'typography' });
    if (iconsTop < activePoint && iconsBottom > activePoint)
      this.setState({ ...this.state, activeTab: 'icons' });
    if (buttonsTop < activePoint && buttonsBottom > activePoint)
      this.setState({ ...this.state, activeTab: 'buttons' });
    if (formsTop < activePoint && formsBottom > activePoint)
      this.setState({ ...this.state, activeTab: 'forms' });
    if (standardInputTop < activePoint && standardInputBottom > activePoint)
      this.setState({ ...this.state, activeTab: 'standardInput' });
    if (dropdownTop < activePoint && dropdownBottom > activePoint)
      this.setState({ ...this.state, activeTab: 'dropdownMenu' });
    if (radioTop < activePoint && radioBottom > activePoint)
      this.setState({ ...this.state, activeTab: 'radioButtons' });
    if (checkboxTop < activePoint && checkboxBottom > activePoint)
      this.setState({ ...this.state, activeTab: 'checkBox' });
    if (switchTop < activePoint && switchBottom > activePoint)
      this.setState({ ...this.state, activeTab: 'switch' });
    if (containerTop < activePoint && containerBottom > activePoint)
      this.setState({ ...this.state, activeTab: 'containers' });
    if (panelTop < activePoint && panelBottom > activePoint)
      this.setState({ ...this.state, activeTab: 'panel' });
    if (accordionTop < activePoint && accordionBottom > activePoint)
      this.setState({ ...this.state, activeTab: 'accordion' });
    if (modalTop < activePoint && modalBottom > activePoint)
      this.setState({ ...this.state, activeTab: 'modal' });
    if (contentTop < activePoint && contentBottom > activePoint)
      this.setState({ ...this.state, activeTab: 'content' });
    if (dividersTop < activePoint && dividersBottom > activePoint)
      this.setState({ ...this.state, activeTab: 'dividers' });
    if (loadingTop < activePoint && loadingBottom > activePoint)
      this.setState({ ...this.state, activeTab: 'loadingIndicator' });
  };

  handleTabClick = tab => {
    this.setState({ ...this.state, activeTab: tab });
  };

  render() {
    return (
      <div>
        <Header />
        <Container fluid style={{ marginLeft: '10px' }}>
          <div>
            <Sidebar
              activeTab={this.state.activeTab}
              onTabClick={this.handleTabClick}
            />
            <div className="main borderLeft">
              <div>
                <div id="colors" ref={this.colorsRef} className="anchor" style={{padding:"88px 0 0"}}>
                  <Color />
                </div>
                <div
                  id="typography"
                  className="anchor"
                  ref={this.typographyRef}>
                  <Typography />
                </div>
                <div id="icons" ref={this.iconsRef} className="anchor">
                  <IconsDemo />
                </div>
                <div id="buttons" ref={this.buttonsRef} className="anchor">
                  <ButtonsDemo />
                </div>
                <div id="forms" ref={this.formsRef} className="anchor">
                  <FormsDemo />
                </div>
                <div
                  id="standardInput"
                  ref={this.standardInputRef}
                  className="anchor">
                  <StandardInputDemo />
                </div>
                <div
                  id="dropdownMenu"
                  ref={this.dropdownRef}
                  className="anchor">
                  <DropDownDemo />
                </div>
                <div id="radioButtons" ref={this.radioRef} className="anchor">
                  <RadioButtonsDemo />
                </div>
                <div id="checkbox" ref={this.checkboxRef} className="anchor">
                  <CheckBoxDemo />
                </div>
                <div id="switch" ref={this.switchRef} className="anchor">
                  <SwitchDemo />
                </div>
                <div
                  id="containers"
                  ref={this.containersRef}
                  className="anchor">
                  <h2>Containers</h2>
                </div>
                <div id="panel" ref={this.panelRef} className="anchor">
                  <PanelDemo />
                </div>
                <div id="accordion" ref={this.accordionRef} className="anchor">
                  <AccordionsDemo />
                </div>
                <div id="modal" ref={this.modalRef} className="anchor">
                  <ModalDemo />
                </div>
                <div id="content" ref={this.contentRef} className="anchor">
                  <h2>Content</h2>
                </div>
                <div id="dividers" ref={this.dividersRef} className="anchor">
                  <DividersDemo />
                </div>
                <div
                  id="loadingIndicator"
                  ref={this.loadingRef}
                  className="anchor">
                  <LoadingDemo />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
