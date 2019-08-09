import React from 'react';
import Radio from './Radio';

class RadioButtonsDemo extends React.Component {
  render() {
    return (
      <div>
        <h4 className="header-padding">Radio Buttons</h4>
        <Radio
          content={[
            { content: 'radio toggle one' },
            { content: 'radio toggle two' },
            { content: 'radio toggle three' }
          ]}
        />
        <br />
        <pre>
          <code className="language-jsx">
            {`
          import Radio from './Radio'
 
          ...
                    
          <Radio content={[
            {content:'radio toggle one'},
            {content:'radio toggle two'},
            {content:'radio toggle three'},
          ]}/>
          `}
          </code>
        </pre>
        <br />
      </div>
    );
  }
}
export default RadioButtonsDemo;
