import React from 'react';
import Radio from './Radio'
import Prism from 'prismjs';

class RadioButtonsDemo extends React.Component {
  constructor ( props ) {
    super( props );
  }
  render () {
    return(
      <div>
        <h4>Radio Buttons</h4>
        <Radio content={[
                {content:'radio toggle one'},
                {content:'radio toggle two'},
                {content:'radio toggle three'},
              ]}/>
        <br />
        <pre><code className="language-jsx">
          {`
          import Radio from './Radio'
 
          ...
                    
          <Radio content={[
            {content:'radio toggle one'},
            {content:'radio toggle two'},
            {content:'radio toggle three'},
          ]}/>
          `} 
        </code></pre>
        <br />
      </div>
    );
  }
}
export default RadioButtonsDemo