import React from 'react';
import CheckBox from './CheckBox'
import Prism from 'prismjs';

class RadioButtonsDemo extends React.Component {
  constructor ( props ) {
    super( props );
  }
  render () {
    return(
      <div>
        <h4>Checkboxes</h4>
        <br />
        <CheckBox content={[
          {name:'checkbox-demo',value:'thing-one',content:'First Checkbox'},
          {name:'checkbox-demo',value:'thing-two',content:'Second Checkbox'},
          {name:'checkbox-demo',value:'thing-three',content:'Third Checkbox'},
        ]}/>
        <br />
        <pre><code className="language-jsx">
          {`
          import CheckBox from './CheckBox'
 
          ...
                    
          <CheckBox content={[
            {name:'checkbox-demo',value:'thing-one',content:'First Checkbox'},
            {name:'checkbox-demo',value:'thing-two',content:'Second Checkbox'},
            {name:'checkbox-demo',value:'thing-three',content:'Third Checkbox'},
          ]}/>
          `} 
        </code></pre>
      </div>
    );
  }
}
export default RadioButtonsDemo