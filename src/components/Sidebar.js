import React from 'react';
import './componentStyles/Sidebar.scss';

class Sidebar extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {
      showForms: false,
      showContainers: false,
      showContent: false,
    }
  }
  handleContainerClick=()=> {
    this.setState({showContainers : !(this.state.showContainers) });
  }
  handleFormsClick=()=> {
    this.setState({showForms : !(this.state.showForms) });
  }  
  handleContentClick=()=> {
    this.setState({showContent : !(this.state.showContent) });
  }

  render () {
    return(
      <div>
        <div className="sideVerticalLine"></div>
        <div className="disappearingSideBar">
          <div><a href="#colors">Colors</a></div>
          <div><a href="#typography">Typography</a></div>
          <div><a href="#icons">Icons</a></div>
          <div><a href="#buttons">Buttons</a></div>
          <div onClick={this.handleFormsClick}><a href="#forms">Forms</a></div>
          {this.state.showForms ?
            <div className="indentSidebar">
              <div><a href="#standardInput">Standard Text Input</a></div>
              <div><a href="#dropdownMenu">Dropdown Menu</a></div>
              <div><a href="#radioButtons">Radio Buttons</a></div>
              <div><a href="#checkbox">Checkboxes</a></div>
              <div><a href="#switch">Switch</a></div>
            </div>
          :""}
          <div onClick={this.handleContainerClick}><a href="#containers">Containers</a></div>
          {this.state.showContainers ?
            <div className="indentSidebar">
              <div><a href="#panel">Panel</a></div>
              <div><a href="#accordion">Accordion</a></div>
              <div><a href="#modal">Modal</a></div>
            </div>
          :""}
          <div onClick={this.handleContentClick}><a href="#content">Content</a></div>
          {this.state.showContent ?
          <div className="indentSidebar">
            <div><a href="#dividers">Dividers</a></div>
            <div><a href="#loadingIndicator">Loading Indicator</a></div>
          </div>
          :""}
        </div>
      </div>
    );
  }
}
export default Sidebar