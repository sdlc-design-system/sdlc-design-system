//modified from: https://react-bootstrap.github.io/components/modal/
import React, { Component } from 'react';
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import '../App.scss'
import './componentStyles/ModalSDLC.scss';

class ModalSDLC extends React.Component {
  constructor(props, context) {
    super(props, context); 
  }
  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.handleModalClick}>
          <Modal.Header className="closeButtonStyling" closeButton></Modal.Header>
          <Modal.Header className="modalTitleStyling">
            <Modal.Title className="modalTitleStyling">{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.content}</Modal.Body>
          <Modal.Footer>
            <div className="modalFooter">
              <div onClink={this.props.handleTextLink} className="modalTextLink">{this.props.textLink}</div>
              <div style={{display:"flex"}}>
                <div className="modalButton">
                  <Button className="btn-secondary btn-lg" onClick={this.props.handleModalClick} >
                    Cancel
                  </Button>
                </div>
                <Button className="btn-primary btn-lg" onClick={this.props.buttonOnRightAction}>
                  {this.props.buttonOnRightTitle}
                </Button>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default ModalSDLC
