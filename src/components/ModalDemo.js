import React from 'react';
import './componentStyles/ModalDemo.scss';
import ModalSDLC from './ModalSDLC'
import ButtonSDLC from './ButtonSDLC'
import Prism from 'prismjs';


class ModalDemo extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {
      showModal: false,
    }
  }

  handleModalClose=()=> {
    this.setState({ showModal: false });
  }

  handleModalShow=()=> {
    this.setState({ showModal: true });
  }

  render () {
    return(
      <div>
        <h4>Modal Window</h4>
        <br />
        <div className="basicBorder seventyPercentWidth">
          <div className="rightX">
            ×
          </div>
          <h4 className="centerTitleModal">Title</h4>
          <br />
          <div className="modalContent">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
          <br />
          <div className="buttonsModal">
            <ButtonSDLC size="largeButton" 
                        buttonStyle="secondaryButton" 
                        text="Cancel" 
            />
            <ButtonSDLC size="largeButton" 
                        buttonStyle="primaryButton" 
                        text="Confirm" 
            />
          </div>
        </div>
        <br />
        <h4>Example</h4>
        <ButtonSDLC 
          onClick={this.handleModalShow} 
          size="largeButton" 
          buttonStyle="primaryButton" 
          text="Modal">
        </ButtonSDLC>
        {this.state.showModal ? 
          <ModalSDLC
            showModal = {this.state.showModal}
            handleModalClose = {this.handleModalClose}
            handleModalShow = {this.handleModalShow}
            buttonOnRightTitle = "Confirm"//custom content here
            buttonOnRightAction = {this.handleModalClose}//custom handle click here
            title = "Title"
            content= "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."
          /> : null
        }
        <br />
        <pre><code className="language-jsx">
        {`
        import ModalSDLC from './ModalSDLC'
        import ButtonSDLC from './ButtonSDLC'

        ...

        this.state = {
          showModal: false,
        }

        ...

        <ButtonSDLC 
          onClick={this.handleModalShow} 
          size="largeButton" 
          buttonStyle="primaryButton" 
          text="Modal">
        </ButtonSDLC>

        {this.state.showModal ? 
          <ModalSDLC
            showModal = {this.state.showModal}
            handleModalClose = {this.handleModalClose}
            handleModalShow = {this.handleModalShow}
            buttonOnRightTitle = "Confirm"
            buttonOnRightAction = {this.handleModalClose}
            title = "Title"
            content= "Anim pariatur cliche reprehenderit, enim..."
          /> : null
        }
        `} 
        </code></pre>
      </div>
    );
  }
}
export default ModalDemo