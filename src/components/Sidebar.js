import React from 'react';
import './componentStyles/Sidebar.scss';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForms: false,
      showContainers: false,
      showContent: false,
      activeTab: 'colors'
    };
  }
  handleContainerClick = () => {
    this.setState({ showContainers: !this.state.showContainers });
  };
  handleFormsClick = () => {
    this.setState({ showForms: !this.state.showForms });
  };
  handleContentClick = () => {
    this.setState({ showContent: !this.state.showContent });
  };

  handleClick = item => {
    if (this.state.activeTab !== item)
      this.setState({ ...this.state, activeTab: item });
  };

  render() {
    return (
      <div className="sideVerticalLine disappearingSideBar">
        {/* <div className="sideVerticalLine" /> */}
        {/* <div className="sideVerticalLine disappearingSideBar"> */}
        <div className={this.state.activeTab === 'colors' ? 'active' : ''}>
          <a href="#colors" onClick={() => this.handleClick('colors')}>
            Colors
          </a>
        </div>
        <div className={this.state.activeTab === 'typography' ? 'active' : ''}>
          <a href="#typography" onClick={() => this.handleClick('typography')}>
            Typography
          </a>
        </div>
        <div className={this.state.activeTab === 'icons' ? 'active' : ''}>
          <a href="#icons" onClick={() => this.handleClick('icons')}>
            Icons
          </a>
        </div>
        <div className={this.state.activeTab === 'buttons' ? 'active' : ''}>
          <a href="#buttons" onClick={() => this.handleClick('buttons')}>
            Buttons
          </a>
        </div>
        <div
          onClick={this.handleFormsClick}
          className={this.state.activeTab === 'forms' ? 'active' : ''}>
          <a href="#forms" onClick={() => this.handleClick('forms')}>
            Forms
          </a>
        </div>
        {this.state.showForms ? (
          <div className="indentSidebar">
            <div
              className={
                this.state.activeTab === 'standardInput' ? 'active' : ''
              }>
              <a
                href="#standardInput"
                onClick={() => this.handleClick('standardInput')}>
                Standard Text Input
              </a>
            </div>
            <div
              className={
                this.state.activeTab === 'dropdownMenu' ? 'active' : ''
              }>
              <a
                href="#dropdownMenu"
                onClick={() => this.handleClick('dropdownMenu')}>
                Dropdown Menu
              </a>
            </div>
            <div
              className={
                this.state.activeTab === 'radiButtons' ? 'active' : ''
              }>
              <a
                href="#radioButtons"
                onClick={() => this.handleClick('radiButtons')}>
                Radio Buttons
              </a>
            </div>
            <div
              className={this.state.activeTab === 'checkBox' ? 'active' : ''}>
              <a href="#checkbox" onClick={() => this.handleClick('checkBox')}>
                Checkboxes
              </a>
            </div>
            <div className={this.state.activeTab === 'switch' ? 'active' : ''}>
              <a href="#switch" onClick={() => this.handleClick('switch')}>
                Switch
              </a>
            </div>
          </div>
        ) : (
          ''
        )}
        <div
          onClick={this.handleContainerClick}
          className={this.state.activeTab === 'containers' ? 'active' : ''}>
          <a href="#containers" onClick={() => this.handleClick('containers')}>
            Containers
          </a>
        </div>
        {this.state.showContainers ? (
          <div className="indentSidebar">
            <div className={this.state.activeTab === 'panel' ? 'active' : ''}>
              <a href="#panel" onClick={() => this.handleClick('panel')}>
                Panel
              </a>
            </div>
            <div
              className={this.state.activeTab === 'accordion' ? 'active' : ''}>
              <a
                href="#accordion"
                onClick={() => this.handleClick('accordion')}>
                Accordion
              </a>
            </div>
            <div className={this.state.activeTab === 'modal' ? 'active' : ''}>
              <a href="#modal" onClick={() => this.handleClick('modal')}>
                Modal
              </a>
            </div>
          </div>
        ) : (
          ''
        )}
        <div
          onClick={this.handleContentClick}
          className={this.state.activeTab === 'content' ? 'active' : ''}>
          <a href="#content" onClick={() => this.handleClick('content')}>
            Content
          </a>
        </div>
        {this.state.showContent ? (
          <div className="indentSidebar">
            <div
              className={this.state.activeTab === 'dividers' ? 'active' : ''}>
              <a href="#dividers" onClick={() => this.handleClick('dividers')}>
                Dividers
              </a>
            </div>
            <div
              className={
                this.state.activeTab === 'loadingIndicator' ? 'active' : ''
              }>
              <a
                href="#loadingIndicator"
                onClick={() => this.handleClick('loadingIndicator')}>
                Loading Indicator
              </a>
            </div>
          </div>
        ) : (
          ''
        )}
        {/* </div> */}
      </div>
    );
  }
}
export default Sidebar;
