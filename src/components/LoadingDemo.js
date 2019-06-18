import React from 'react';
import Prism from 'prismjs';
import Loading from './Loading'

class LoadingDemo extends React.Component {
  constructor ( props ) {
    super( props );
  }
  render () {
    return(
      <div>
        <h4>Loading Indicator</h4>
        <br />
        <Loading width="24px" />
        <div></div><br />
        <pre><code className="language-jsx">
          {`
            import Loading from './Loading'

            ...
            
            <Loading width="24px" />
          `} 
        </code></pre>
      </div>
    );
  }
}
export default LoadingDemo