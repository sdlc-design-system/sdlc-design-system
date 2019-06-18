import React from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import IconAlertStopSign from '../svgs/IconAlertStopSign'
import IconCheck from '../svgs/IconCheck'

class StandardInputDemo extends React.Component {
  constructor ( props ) {
    super( props );
  }
  render () {
    return(
      <div>
        <h4>Standard Text Input</h4>
        <div>Text labels are required for all input items to meet accessibility requirements. Each label is left-justified and appears above the field it describes.</div><br />
        <div>Hint text is placeholder text that suggests the type of information requested, sometimes in the form of an example</div><br />
        <div>Validation can be real-time and field-level on an as-needed basis. Some examples are email validation, password validation, and credit card format verification. Other validation happens once the form or input has been submitted.</div><br />
        <div>When an error occurs, an error icon appears in front of the red error message.  The outline and the fill color of the input turns red.</div><br />
        <Form>
          <Row>
            <Col>
              <div className="labels14">Default</div>
              <input 
                className="SDLC-form spacer"
                placeholder="Placeholder Text...">
              </input>
            </Col>
            <Col>
              <div className="labels14">Error</div>
              <input
                placeholder="error"
                className="SDLC-form inputError spacer">
              </input>
              <div style={{color:"red", display:"flex",alignItems:"center" }} className="labels14">
                <div><IconAlertStopSign width="15px" fill="red" /></div>
                <span style={{padding:".25rem 0 0 .25rem"}}>This is an error message</span>
              </div>
            </Col>
            <Col>
              <div className="labels14">Success</div>
              <input 
                className="inputSuccess SDLC-form spacer"
                placeholder="success">
              </input>
              <div style={{color:"green", display:"flex",alignItems:"center" }} className="labels14">
                <div><IconCheck width="15px" fill="green" /></div>
                <span style={{padding:".25rem 0 0 .25rem"}}>This is a success message</span>
              </div>
            </Col>
            <Col>
              <div className="labels14">Disabled</div>
              <input
                placeholder="disabled" disabled
                className="SDLC-form spacer">
              </input>
            </Col>
          </Row>
        </Form>
        <br />
        <div>*Note: Due to the range of possible input strategies, this system does not provide a component specifically designed for form inputs. We suggest you use a standard &lt;input&gt;. For the input to match the SDLC style guide, use classNames: "SDLC-form", "inputError", and "success" when appropriate.</div>
        <br />
      </div>
    );
  }
}
export default StandardInputDemo