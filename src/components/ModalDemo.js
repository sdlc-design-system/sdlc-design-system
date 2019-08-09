import React from 'react';
import './componentStyles/ModalDemo.scss';
import ModalSDLC from './ModalSDLC';
import ButtonSDLC from './ButtonSDLC';

class ModalDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleModalClick = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <div>
        <h4 className="header-padding">Modal Window</h4>

        <ButtonSDLC
          onClick={this.handleModalClick}
          size="largeButton"
          buttonStyle="primaryButton"
          text="Modal"
        />
        {this.state.showModal && (
          <ModalSDLC
            showModal={this.state.showModal}
            handleModalClick={this.handleModalClick}
            buttonOnRightTitle="Confirm" //custom content here
            buttonOnRightAction={this.handleModalClick} //custom handle click here
            title="Title"
            content="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."
            textLink="Privacy"
            handleTextLink={this.state.handleTextLink}
          />
        )}
        <br />
        <pre>
          <code className="language-jsx">
            {`
        import ModalSDLC from './ModalSDLC'
        import ButtonSDLC from './ButtonSDLC'

        ...

        this.state = {
          showModal: false,
        }
        handleModalClick=()=> {
          this.setState({ showModal: false });
        }
        handleTextLink=()=> {......}

        ...

        <ButtonSDLC 
          onClick={this.handleModalClick}
          size="largeButton" 
          buttonStyle="primaryButton" 
          text="Modal">
        </ButtonSDLC>

        {this.state.showModal && 
          <ModalSDLC
            showModal = {this.state.showModal}
            handleModalClick = {this.handleModalClick}
            buttonOnRightTitle = "Confirm" //custom content here
            buttonOnRightAction = {this.handleModalClick} //custom handle click here
            title = "Title"
            content= "Anim pariatur cliche reprehenderit, enim..."
            textLink="Privacy"
            handleTextLink={this.state.handleTextLink}
          />
        }
        `}
          </code>
        </pre>
      </div>
    );
  }
}
export default ModalDemo;
