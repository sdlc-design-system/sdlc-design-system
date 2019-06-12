import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import './componentStyles/ButtonsDemo.scss';
import IconLock from '../svgs/IconLock' 
import Button from './Button'



class ButtonsDemo extends React.Component {
  constructor ( props ) {
    super( props );
  }
  render () {
    return(
      <div>
        <h2>Buttons</h2>
        <h4>Primary Action</h4>
        <div>The primary action should be the most important action on the page, typically indicating next likely action the user will take (e.g. Continue, Checkout, Sign In). It is advised to have a single primary action button on each screen for emphasis. On interfaces where there are multiple next likely actions it is at the product owner’s discretion which styles to use.
When combined within button sets, the primary button should appear at the top when vertically stacked and furthest right when horizontal.
        </div>
        <br></br>
        <div className="flexColumnButtonsDemo">
          <div className="flexRowButtonsDemo">
            <div className="caption buttonDemoPadding" style={{color:"#F58466"}}>Large</div>
            <span className="buttonDemoPadding">
              <Button size="largeButton" 
                      buttonStyle="primaryButton" 
                      text="Primary" 
              />
            </span>
            <span className="buttonDemoPadding">
              <Button disabled={true} size="largeButton" buttonStyle="primaryButton" text="Disabled"></Button>
            </span>
            <span className="buttonDemoPadding">
              <Button size="largeButton" 
                    icon={<IconLock width="15px" fill="white" />} 
                    buttonStyle="primaryButton" 
                    text="Primary"
              />
            </span>
            <Button disabled={true}
                  size="largeButton" 
                  icon={<IconLock width="15px" fill="white" />} 
                  buttonStyle="primaryButton" 
                  text="Disabled"
            />
          </div>
        </div>
        <br></br>
        <h4>Code</h4>
        First Button:
        <div className="rectangleButtonsDemo">
          <div className="codeFont">
            &lt;Button 
            <div className="buttonIndent">
              size="largeButton"<br></br>
              buttonStyle="primaryButton" <br></br>
              text="Primary" <br></br>
              onClick=&#123;...&#125;<br></br>
            </div>
            /&gt;
          </div>
        </div>
        <br></br>
        Fourth Button: (Any icon component can be added - just don't forget to import it...)
        <div className="rectangleButtonsDemo">
          <div className="codeFont">
            import IconLock from '../svgs/IconLock' <br></br>
            ...<br></br>
            ...<br></br>
            ...<br></br>
            &lt;Button 
            <div className="buttonIndent">
              disabled={true} <br></br>
              size="largeButton"<br></br>
              icon=&#123;&lt;IconLock width="15px" fill="white" /&gt;&#125; <br></br>
              buttonStyle="primaryButton" <br></br>
              text="Primary" <br></br>
              onClick=&#123;...&#125;<br></br>
            </div>
            /&gt;
          </div>
        </div>
        <br></br>
        <div className="flexColumnButtonsDemo">
          <div className="flexRowButtonsDemo">
            <div className="caption buttonDemoPadding" style={{color:"#F58466"}}>Medium</div>
            <span className="buttonDemoPadding">
              <Button size="mediumButton" 
                    buttonStyle="primaryButton" 
                    text="Primary"
              />
            </span>
            <Button disabled={true} size="mediumButton" buttonStyle="primaryButton" text="Disabled"></Button>
            
          </div>
        </div>
        <h4>Code</h4>
        First Button:
        <div className="rectangleButtonsDemo">
          <div className="codeFont">
            &lt;Button 
            <div className="buttonIndent">
              size="mediumButton"<br></br>
              buttonStyle="primaryButton" <br></br>
              text="Primary" <br></br>
              onClick=&#123;...&#125;<br></br>
            </div>
            /&gt;
          </div>
        </div>
        <br></br>

        <div className="flexColumnButtonsDemo">
          <div className="flexRowButtonsDemo">
            <div className="caption buttonDemoPadding" style={{color:"#F58466"}}>Small</div>
            <span className="buttonDemoPadding">
              <Button size="smallButton" 
                      buttonStyle="primaryButton" 
                      text="Primary" 
              />
            </span>
            <Button disabled={true} size="smallButton" buttonStyle="primaryButton" text="Disabled"></Button>
            
          </div>
        </div>
        <h4>Code</h4>
        First Button:
        <div className="rectangleButtonsDemo">
          <div className="codeFont">
            &lt;Button 
            <div className="buttonIndent">
              size="smallButton"<br></br>
              buttonStyle="primaryButton" <br></br>
              text="Primary" <br></br>
              onClick=&#123;...&#125;<br></br>
            </div>
            /&gt;
          </div>
        </div>
        <br></br>

        <h4>Secondary Action</h4>
        <div>
          Use a secondary action for non-primary actions. The secondary action treatment allows for multiple actions within a set and on a page without creating a large cognitive load. This treatment is ideal for actions that occur multiple times within a page (e.g. Product Panes). 
        </div>
        <br></br>
        <div className="flexColumnButtonsDemo">
          <div className="flexRowButtonsDemo">
            <div className="caption buttonDemoPadding" style={{color:"#F58466"}}>Large</div>
            <span className="buttonDemoPadding">
              <Button size="largeButton" 
                      buttonStyle="secondaryButton" 
                      text="Secondary" 
              />
            </span>
            <Button disabled={true} size="largeButton" buttonStyle="secondaryButton" text="Disabled"></Button>
            
          </div>
        </div>
        <br></br>
        <div className="flexColumnButtonsDemo">
          <div className="flexRowButtonsDemo">
            <div className="caption buttonDemoPadding" style={{color:"#F58466"}}>Medium</div>
            <span className="buttonDemoPadding">
              <Button size="mediumButton" 
                      buttonStyle="secondaryButton" 
                      text="Secondary" 
              />
            </span>
            <Button disabled={true} size="mediumButton" buttonStyle="secondaryButton" text="Disabled"></Button>
            
          </div>
        </div>
        <br></br>
        <div className="flexColumnButtonsDemo">
          <div className="flexRowButtonsDemo">
            <div className="caption buttonDemoPadding" style={{color:"#F58466"}}>Small</div>
            <span className="buttonDemoPadding">
              <Button size="smallButton" 
                      buttonStyle="secondaryButton" 
                      text="Secondary" 
              />
            </span>
            <Button disabled={true} size="smallButton" buttonStyle="secondaryButton" text="Disabled"></Button>
            
          </div>
        </div>
        <br></br>
        <h4>Code</h4>
        First Button:
        <div className="rectangleButtonsDemo">
          <div className="codeFont">
            &lt;Button 
            <div className="buttonIndent">
              size="largeButton"<br></br>
              buttonStyle="secondaryButton" <br></br>
              text="Secondary" <br></br>
              onClick=&#123;...&#125;<br></br>
            </div>
            /&gt;
          </div>
        </div>
        <Row>
          <Col>
            <Dropdown>
              <Dropdown.Toggle className="btn btn-lg btn-primary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle className="btn btn-lg btn-secondary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle disabled className="btn btn-lg btn-primary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle disabled className="btn btn-lg btn-secondary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Dropdown>
              <Dropdown.Toggle className="btn btn-sm btn-primary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle className="btn btn-sm btn-secondary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle disabled className="btn btn-sm btn-primary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle disabled className="btn btn-lg btn-secondary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <br/>

        <Row>
          <Col>
            <Dropdown>
              <Dropdown.Toggle className="btn btn-xs btn-primary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle className="btn btn-xs btn-secondary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle disabled className="btn btn-xs btn-primary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle disabled className="btn btn-xs btn-secondary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </div>
    );
  }
}
export default ButtonsDemo