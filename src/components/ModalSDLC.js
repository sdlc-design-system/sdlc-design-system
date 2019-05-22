//modified from: https://react-bootstrap.github.io/components/modal/
import React, { Component } from 'react';
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import '../App.scss'
import './ModalSDLC.scss';

class ModalSDLC extends React.Component {
  constructor(props, context) {
    super(props, context); 
  }
  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.handleModalClose}>
          <Modal.Header className="closeButtonStyling" closeButton></Modal.Header>
          <Modal.Header className="modalTitleStyling">
            <Modal.Title className="modalTitleStyling">{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.content}</Modal.Body>
          <Modal.Footer>
            <Row>
              <Col xs={6} className="centerButton">
                <Button className="btn-secondary btn-lg" onClick={this.props.handleModalClose} >
                  Cancel
                </Button>
              </Col>
              <Col xs={6} className="centerButton">
                <Button className="btn-primary btn-lg" onClick={this.props.buttonOnRightAction}>
                  {this.props.buttonOnRightTitle}
                </Button>
              </Col>
            </Row>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default ModalSDLC
