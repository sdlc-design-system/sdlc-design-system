import React from 'react';
import './componentStyles/Color.scss';

class Color extends React.Component {
  render() {
    return (
      <div>
        <h3 className="header-padding">Colors</h3>
        <div className="flexRow">
          <div className="flexColumnDescription">
            <div>
              <span className="labels16">Dominant Colors: </span>
              These two colors are to be the primary and most used colors for
              all SDLC materials.
            </div>
          </div>
          <div className="centerSwatch">
            <div>
              <div className="swatch brand">
                <div>44687d</div>
                <div>$brand</div>
              </div>
              <div className="swatch lighterbrand">
                <div>80A1B6</div>
                <div>$lighterbrand</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flexRow">
          <div className="flexColumnDescription">
            <div>
              <span className="labels16">Accent Colors: </span>
              Only these accompanying secondary colors are to be used in all
              SDLC materials. They should never hold a position in the visual
              hierarchy that is greater or occupies more space than the dominant
              colors.
            </div>
          </div>
          <div className="centerSwatch">
            <div>
              <div className="swatch coral">
                <div>F58466</div>
                <div>$coral</div>
              </div>
              <div className="swatch bisque">
                <div>FEDAB4</div>
                <div>$bisque</div>
              </div>
              <div className="swatch blue">
                <div>4A90E2</div>
                <div>$blue</div>
              </div>
              <div className="swatch turquoise">
                <div>A3D9D2</div>
                <div>$turquoise</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flexRow">
          <div className="flexColumnDescription">
            <div>
              <span className="labels16">Greyscale Colors: </span>
              Only these accompanying secondary colors are to be used in all
              SDLC materials. They should never hold a position in the visual
              hierarchy that is greater or occupies more space than the dominant
              colors.
            </div>
          </div>
          <div className="centerSwatch">
            <div>
              <div className="swatch greyscale-pale">
                <div>E9EBEF</div>
                <div>$greyscale-pale</div>
              </div>
              <div className="swatch greyscale-light">
                <div>A7A9AC</div>
                <div>$greyscale-light</div>
              </div>
              <div className="swatch greyscale-medium">
                <div>231F20</div>
                <div>$greyscale-medium</div>
              </div>
              <div className="swatch greyscale-dark">
                <div>A3D9D2</div>
                <div>$greyscale-dark</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flexRow">
          <div className="flexColumnDescription">
            <div>
              <span className="labels16">Color States: </span>
              Interactive color states for links and buttons. The four states:
              default, hover, disabled, and pressed.
            </div>
          </div>
          <div className="centerSwatch">
            <div>
              <div className="swatch btn-brand">
                <div>6289A1</div>
                <div>$btn-brand</div>
              </div>
              <div className="swatch btn-brand-hover">
                <div>719BB1</div>
                <div>$btn-brand-hover</div>
              </div>
              <div className="swatch btn-brand-disabled">
                <div>ACC5D1</div>
                <div>$btn-brand-disabled</div>
              </div>
              <div className="swatch btn-brand-pressed">
                <div>42677a</div>
                <div>$btn-brand-pressed</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flexRow">
          <span className="labels16">Messaging:</span>
        </div>
        <div className="flexRow">
          <div className="flexColumnDescription">
            <div>
              <span className="labels16" style={{ color: '#dc0000' }}>
                Red{' '}
              </span>
              is used to send an error message.
            </div>
          </div>
          <div className="centerSwatch">
            <div>
              <div className="swatch red">
                <div>DC0000</div>
                <div>$red</div>
              </div>
              <div className="swatch red-bg">
                <div>F8CCCC</div>
                <div>$red-bg</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flexRow">
          <div className="flexColumnDescription">
            <div>
              <span className="labels16" style={{ color: '#f0b400' }}>
                Yellow{' '}
              </span>
              is used to send a warning message.
            </div>
          </div>
          <div className="centerSwatch">
            <div>
              <div className="swatch yellow">
                <div>F0B400</div>
                <div>$yellow</div>
              </div>
              <div className="swatch yellow-bg">
                <div>FFF7CC</div>
                <div>$yellow-bg</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flexRow">
          <div className="flexColumnDescription">
            <div>
              <span className="labels16" style={{ color: '#5290c3' }}>
                Blue{' '}
              </span>
              is used to send a neutral message.
            </div>
          </div>
          <div className="centerSwatch">
            <div>
              <div className="swatch blue">
                <div>5290C3</div>
                <div>$blue</div>
              </div>
              <div className="swatch blue-bg">
                <div>DCE9F3</div>
                <div>$blue-bg</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flexRow">
          <div className="flexColumnDescription">
            <div>
              <span className="labels16" style={{ color: '#52ad62' }}>
                Green{' '}
              </span>
              is used to send a success message.
            </div>
          </div>
          <div className="centerSwatch">
            <div>
              <div className="swatch green">
                <div>52AD62</div>
                <div>$green</div>
              </div>
              <div className="swatch green-bg">
                <div>DCEFE0</div>
                <div>$green-bg</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Color;
