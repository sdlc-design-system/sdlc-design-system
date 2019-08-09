import React from 'react';
import Loading from './Loading';

class LoadingDemo extends React.Component {
  render() {
    return (
      <div>
        <h4 className="header-padding">Loading Indicator</h4>
        <br />
        <Loading width="24px" />
        <div />
        <br />
        <pre>
          <code className="language-jsx">
            {`
            import Loading from './Loading'

            ...
            
            <Loading width="24px" />
          `}
          </code>
        </pre>
      </div>
    );
  }
}
export default LoadingDemo;
