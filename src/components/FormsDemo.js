import React from 'react';

class FormsDemo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Forms</h3>
        <div>
          Forms can contain Text Inputs, Text Areas, Select Drop Downs, Radio
          Buttons, Checkboxes, Date Pickers, and other methods of input. Forms
          are used when there is important information for the user to input,
          both optional and required or when the user needs to edit existing
          information/settings/etc. For optional fields consider if that
          information is truly needed from the customer and what value it adds.
        </div>
        <br />
      </div>
    );
  }
}
export default FormsDemo;
