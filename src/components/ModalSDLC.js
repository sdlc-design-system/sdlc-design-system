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
    this.state = {
      show: false,
    };
  }

  handleClose=()=> {
    this.setState({ show: false });
  }

  handleShow=()=> {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header className="closeButtonStyling" closeButton>
          </Modal.Header>

            <Modal.Header className="modalTitleStyling">
              <Modal.Title className="modalTitleStyling">Title</Modal.Title>

          </Modal.Header>
          <Modal.Body>Sed posuere consectetur est at lobortis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</Modal.Body>
          <Modal.Footer>
            <Row>
              <Col xs={6} className="centerButton">
                <Button className="btn-secondary btn-lg" onClick={this.handleClose} >
                  Cancel
                </Button>
              </Col>
              <Col xs={6} className="centerButton">
                <Button className="btn-primary btn-lg" onClick={this.handleClose}>
                  Confirm
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
