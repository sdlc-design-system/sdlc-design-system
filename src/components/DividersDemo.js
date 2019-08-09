import React from 'react';

class DividersDemo extends React.Component {
  render() {
    return (
      <div>
        <h4 className="header-padding">Dividers</h4>
        <div>Heavy divider</div>
        <hr className="heavyDivider" />
        <div>Light divider</div>
        <hr className="lightDivider" />

        <br />
        <pre>
          <code className="language-jsx">
            {`
            <hr className="heavyDivider"></hr>
            <hr className="lightDivider"></hr>
          `}
          </code>
        </pre>
      </div>
    );
  }
}
export default DividersDemo;
