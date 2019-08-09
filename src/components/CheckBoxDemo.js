import React from 'react';
import CheckBox from './CheckBox';

class RadioButtonsDemo extends React.Component {
  render() {
    return (
      <div>
        <h4 className="header-padding">Checkboxes</h4>
        <CheckBox
          content={[
            {
              name: 'checkbox-demo',
              value: 'thing-one',
              content: 'First Checkbox'
            },
            {
              name: 'checkbox-demo',
              value: 'thing-two',
              content: 'Second Checkbox'
            },
            {
              name: 'checkbox-demo',
              value: 'thing-three',
              content: 'Third Checkbox'
            }
          ]}
        />
        <br />
        <pre>
          <code className="language-jsx">
            {`
          import CheckBox from './CheckBox'
 
          ...
                    
          <CheckBox content={[
            {name:'checkbox-demo',value:'thing-one',content:'First Checkbox'},
            {name:'checkbox-demo',value:'thing-two',content:'Second Checkbox'},
            {name:'checkbox-demo',value:'thing-three',content:'Third Checkbox'},
          ]}/>
          `}
          </code>
        </pre>
      </div>
    );
  }
}
export default RadioButtonsDemo;
