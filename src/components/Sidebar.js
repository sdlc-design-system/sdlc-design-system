import React from 'react';
import './componentStyles/Sidebar.scss';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForms: false,
      showContainers: false,
      showContent: false
    };
  }

  openCloseContainer = () => {
    this.setState({ showContainers: !this.state.showContainers, showForms:false, showContent:false });
  };
  openCloseForms = () => {
    this.setState({ showForms: !this.state.showForms, showContainers:false, showContent:false });
  };
  openCloseContent = () => {
    this.setState({ showContent: !this.state.showContent, showForms:false,showContainers:false });
  };

  handleClick = item => {
    if (this.props.activeTab !== item) this.props.onTabClick(item);
  };

  render() {
    const { activeTab } = this.props;
    if (
      (activeTab === 'standardInput' ||
        activeTab === 'dropdownMenu' ||
        activeTab === 'radioButtons' ||
        activeTab === 'checkBox' ||
        activeTab === 'switch') &&
      this.state.showForms === false
    )
      {this.setState({ ...this.state, showForms: true, showContainers: false, showContent: false });}

    else if (
      (activeTab === 'panel' ||
        activeTab === 'accordion' ||
        activeTab === 'modal') &&
      this.state.showContainers === false
    )
      {this.setState({ ...this.state, showContainers: true, showForms: false, showContent: false });}

    else if (
      (activeTab === 'dividers' || activeTab === 'loadingIndicator') &&
      this.state.showContent === false
    )
      {this.setState({ ...this.state, showContent: true, showContainers: false, showForms: false  });}
    else if ((this.state.showContainers || this.state.showForms || this.state.showContent) && (activeTab === 'colors' || activeTab === 'typography' || activeTab === 'icons' || activeTab === 'buttons'))  
      {this.setState({ ...this.state, showContent: false, showContainers: false, showForms: false  });}


    return (
      <div className="sideVerticalLine disappearingSideBar">
        {/* <div className="sideVerticalLine" /> */}
        {/* <div className="sideVerticalLine disappearingSideBar"> */}
        <div className={this.props.activeTab === 'colors' ? 'active' : ''}>
          <a href="#colors" onClick={() => this.handleClick('colors')}>
            Colors
          </a>
        </div>
        <div className={this.props.activeTab === 'typography' ? 'active' : ''}>
          <a href="#typography" onClick={() => this.handleClick('typography')}>
            Typography
          </a>
        </div>
        <div className={this.props.activeTab === 'icons' ? 'active' : ''}>
          <a href="#icons" onClick={() => this.handleClick('icons')}>
            Icons
          </a>
        </div>
        <div className={this.props.activeTab === 'buttons' ? 'active' : ''}>
          <a href="#buttons" onClick={() => this.handleClick('buttons')}>
            Buttons
          </a>
        </div>
        <div
          onClick={this.openCloseForms}
          className={this.props.activeTab === 'forms' ? 'active' : ''}>
          <a href="#forms" onClick={() => this.handleClick('forms')}>
            Forms
          </a>
        </div>
        {this.state.showForms ? (
          <div className="indentSidebar">
            <div
              className={
                this.props.activeTab === 'standardInput' ? 'active' : ''
              }>
              <a
                href="#standardInput"
                onClick={() => this.handleClick('standardInput')}>
                Standard Text Input
              </a>
            </div>
            <div
              className={
                this.props.activeTab === 'dropdownMenu' ? 'active' : ''
              }>
              <a
                href="#dropdownMenu"
                onClick={() => this.handleClick('dropdownMenu')}>
                Dropdown Menu
              </a>
            </div>
            <div
              className={
                this.props.activeTab === 'radioButtons' ? 'active' : ''
              }>
              <a
                href="#radioButtons"
                onClick={() => this.handleClick('radioButtons')}>
                Radio Buttons
              </a>
            </div>
            <div
              className={this.props.activeTab === 'checkBox' ? 'active' : ''}>
              <a href="#checkbox" onClick={() => this.handleClick('checkBox')}>
                Checkboxes
              </a>
            </div>
            <div className={this.props.activeTab === 'switch' ? 'active' : ''}>
              <a href="#switch" onClick={() => this.handleClick('switch')}>
                Switch
              </a>
            </div>
          </div>
        ) : (
          ''
        )}
        <div
          onClick={this.openCloseContainer}
          className={this.props.activeTab === 'containers' ? 'active' : ''}>
          <a href="#containers" onClick={() => this.handleClick('containers')}>
            Containers
          </a>
        </div>
        {this.state.showContainers ? (
          <div className="indentSidebar">
            <div className={this.props.activeTab === 'panel' ? 'active' : ''}>
              <a href="#panel" onClick={() => this.handleClick('panel')}>
                Panel
              </a>
            </div>
            <div
              className={this.props.activeTab === 'accordion' ? 'active' : ''}>
              <a
                href="#accordion"
                onClick={() => this.handleClick('accordion')}>
                Accordion
              </a>
            </div>
            <div className={this.props.activeTab === 'modal' ? 'active' : ''}>
              <a href="#modal" onClick={() => this.handleClick('modal')}>
                Modal
              </a>
            </div>
          </div>
        ) : (
          ''
        )}
        <div
          onClick={this.openCloseContent}
          className={this.props.activeTab === 'content' ? 'active' : ''}>
          <a href="#content" onClick={() => this.handleClick('content')}>
            Content
          </a>
        </div>
        {this.state.showContent ? (
          <div className="indentSidebar">
            <div
              className={this.props.activeTab === 'dividers' ? 'active' : ''}>
              <a href="#dividers" onClick={() => this.handleClick('dividers')}>
                Dividers
              </a>
            </div>
            <div
              className={
                this.props.activeTab === 'loadingIndicator' ? 'active' : ''
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
