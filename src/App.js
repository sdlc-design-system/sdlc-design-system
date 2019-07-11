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
import SearchboxDemo from './components/SearchboxDemo';
import DividersDemo from './components/DividersDemo';
import LoadingDemo from './components/LoadingDemo';
import IconsDemo from './components/IconsDemo';

class App extends Component {
  constructor(props) {
    super(props);
    this.list=[['colors','Colors'],
              ['typography','Typography'],
              ['icons','Icons'],
              ['buttons','Buttons'],
              [['forms','Forms'],['standardInput','Standard Text Input'],['dropdownMenu','Dropdown Menu'],['radioButtons','Radio Buttons'],['checkBox','Checkboxes'],['switch','Switch'],['search','Searchbox']],
              [['containers','Containers'],['panel','Panel'],['accordion','Accordion'],['modal','Modal']],
              [['content','Content'],['dividers','Dividers'],['loadingIndicator','Loading Indicatior']]
            ]
    this.categories=this.list.flat(2).filter((x,index)=>!(index%2))
    this.state = {
      activeTab: this.categories[0] //initial active tab is the first category
    };
    this.categories.forEach((item)=>this[item+'Ref']=createRef()) //create Refs for every category
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = e => {
    const activePoint = window.innerHeight / 2; 
    this.categories.forEach((item)=>{ //run through the categories...if currently on the top half of the screen, highlight the sidebar
      if (this[item+'Ref'].current.getBoundingClientRect().top < activePoint && this[item+'Ref'].current.getBoundingClientRect().bottom > activePoint)
        return this.setState({ ...this.state, activeTab: item })
    })
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
              list={this.list}
            />
            <div className="main borderLeft">
              <div>
                <div id="colors" ref={this.colorsRef} className="anchor" style={{padding:"88px 0 0"}}>
                  <Color />
                </div>
                <div id="typography" className="anchor" ref={this.typographyRef}>
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
                <div id="standardInput" ref={this.standardInputRef} className="anchor">
                  <StandardInputDemo />
                </div>
                <div id="dropdownMenu" ref={this.dropdownMenuRef} className="anchor">
                  <DropDownDemo />
                </div>
                <div id="radioButtons" ref={this.radioButtonsRef} className="anchor">
                  <RadioButtonsDemo />
                </div>
                <div id="checkBox" ref={this.checkBoxRef} className="anchor">
                  <CheckBoxDemo />
                </div>
                <div id="switch" ref={this.switchRef} className="anchor">
                  <SwitchDemo />
                </div>
                <div id="search" ref={this.searchRef} className="anchor">
                  <SearchboxDemo />
                </div>
                <div id="containers" ref={this.containersRef} className="anchor">
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
                <div id="loadingIndicator" ref={this.loadingIndicatorRef} className="anchor">
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
