import React from 'react';
import Prism from 'prismjs';

class DividersDemo extends React.Component {
  constructor ( props ) {
    super( props );
  }
  render () {
    return(
      <div>
        <h4>Dividers</h4>
        <div>Heavy divider</div>
        <hr className="heavyDivider"></hr>
        <div>Light divider</div>
        <hr className="lightDivider"></hr>
              
        <br />
        <pre><code className="language-jsx">
          {`
            <hr className="heavyDivider"></hr>
            <hr className="lightDivider"></hr>
          `} 
        </code></pre>
      </div>
    );
  }
}
export default DividersDemo