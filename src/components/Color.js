import React from 'react';
import './componentStyles/Color.scss';

class Color extends React.Component {
  constructor ( props ) {
    super( props );
  }
  render () {
    return(
      <div>
        <h2>Colors</h2>
        <div className="flexRow">
          <div className="flexColumnDescription">
            <div>
              <span className="bold">Dominant Colors: </span>
              These two colors are to be the primary and most used colors for all SDLC materials.
            </div>
          </div>
          <div className="flexColumnSwatch">
            <div className="swatch brand">
              <span>44687d</span>
              <span>$brand</span>
            </div>
            <div className="swatch lighterbrand">
              <span>80A1B6</span>
              <span>$lighterbrand</span>
            </div>
          </div>
        </div>
        <div className="flexRow"> 
          <div className="flexColumnDescription">
            <div> 
              <span className="bold">Accent Colors: </span>
              Only these accompanying secondary colors are to be used in all SDLC materials. They should never hold a position in the visual hierarchy that is greater or occupies more space than the dominant colors.
            </div>
          </div>
          <div className="flexColumnSwatch">
            <div className="swatch coral">
              <span>F58466</span>
              <span>$coral</span>
            </div>
            <div className="swatch bisque">
              <span>FEDAB4</span>
              <span>$bisque</span>
            </div>
            <div className="swatch blue">
              <span>5290C3</span>
              <span>$blue</span>
            </div>
            <div className="swatch turquoise">
              <span>A3D9D2</span>
              <span>$turquoise</span>
            </div>
            <div className="swatch olive">
              <span>999900</span>
              <span>$olive</span>
            </div>
            <div className="swatch grey">
              <span>A8A08D</span>
              <span>$grey</span>
            </div>
          </div>
        </div>
        <div className="flexRow"> 
          <div className="flexColumnDescription">
            <div>
              <span className="bold">Greyscale Colors: </span>
              Only these accompanying secondary colors are to be used in all SDLC materials. They should never hold a position in the visual hierarchy that is greater or occupies more space than the dominant colors.
            </div>
          </div>
          <div className="flexColumn">
            <div className="swatch greyscale-pale">
              <span>E9EBEF</span>
              <span>$greyscale-pale</span>
            </div>
            <div className="swatch greyscale-light">
              <span>A7A9AC</span>
              <span>$greyscale-light</span>
            </div>
            <div className="swatch greyscale-medium">
              <span>231F20</span>
              <span>$greyscale-medium</span>
            </div>
            <div className="swatch greyscale-dark">
              <span>A3D9D2</span>
              <span>$greyscale-dark</span>
            </div>
          </div>
        </div>
        <div className="flexRow"> 
          <div className="flexColumnDescription">
            <div>
              <span className="bold">Color States: </span>
              Interactive color states for links and buttons. The four states: default, hover, disabled, and pressed.
            </div>
          </div>
          <div className="flexColumn">
            <div className="swatch btn-brand">
              <span>6289A1</span>
              <span>$btn-brand</span>
            </div>
            <div className="swatch btn-brand-hover">
              <span>719BB1</span>
              <span>$btn-brand-hover</span>
            </div>
            <div className="swatch btn-brand-disabled">
              <span>ACC5D1</span>
              <span>$btn-brand-disabled</span>
            </div>
            <div className="swatch btn-brand-pressed">
              <span>42677a</span>
              <span>$btn-brand-pressed</span>
            </div>
          </div>
        </div>
        <div className="flexRow"><span className="bold">Messaging:</span></div>
        <div className="flexRow"> 
          <div className="flexColumnDescription">
            <div>
              <span className="bold" style={{color:"#dc0000"}}>Red </span> 
              is used to send an error message.
            </div>
          </div>
          <div className="flexColumn">
            <div className="swatch red">
              <span>DC0000</span>
              <span>$red</span>
            </div>
            <div className="swatch red-bg">
              <span>F8CCCC</span>
              <span>$red-bg</span>
            </div>
          </div>
        </div>
        <div className="flexRow"> 
          <div className="flexColumnDescription">
            <div>
              <span className="bold" style={{color:"#f0b400"}}>Yellow </span>
              is used to send a warning message.
            </div>
          </div>
          <div className="flexColumn">
            <div className="swatch yellow">
              <span>F0B400</span>
              <span>$yellow</span>
            </div>
            <div className="swatch yellow-bg">
              <span>FFF7CC</span>
              <span>$yellow-bg</span>
            </div>
          </div>
        </div>
        <div className="flexRow"> 
          <div className="flexColumnDescription">
            <div>
              <span className="bold" style={{color:"#5290c3"}}>Blue </span>
              is used to send a neutral message.
            </div>
          </div>
          <div className="flexColumn">
            <div className="swatch blue">
              <span>5290C3</span>
              <span>$blue</span>
            </div>
            <div className="swatch blue-bg">
              <span>DCE9F3</span>
              <span>$blue-bg</span>
            </div>
          </div>
        </div>
        <div className="flexRow"> 
          <div className="flexColumnDescription">
            <div>
              <span className="bold" style={{color:"#52ad62"}}>Green </span>
              is used to send a success message.
            </div>
          </div>
          <div className="flexColumn">
            <div className="swatch green">
              <span>52AD62</span>
              <span>$green</span>
            </div>
            <div className="swatch green-bg">
              <span>DCEFE0</span>
              <span>$green-bg</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Color