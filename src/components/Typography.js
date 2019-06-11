import React from 'react';
import './componentStyles/Typography.scss';

class Typography extends React.Component {
  constructor ( props ) {
    super( props );
  }
  render () {
    return(
      <div>
        <h2>Typography</h2>
        <h4>Open Sans/Lato</h4>
        <div className="flexColumnTypography">
          <div className="flexRowTypography">
            <span className="col1 bold">Element / Class</span>
            <span className="col2 bold">Text Size / Line Height</span>
            <span className="col3 bold">Type Specimen</span>
          </div>
        </div>
        <hr className="lightDivider noMargin"></hr>
        <div className="flexColumnTypography">
          <div className="flexRowTypography">
            <span className="col1">&lt;h1&gt;</span>
            <span className="col2">72px/80px</span>
            <h1 className="col3">Display Title</h1>
          </div>
          <div className="flexRowTypography">
            <span className="col1">&lt;h2&gt;</span>
            <span className="col2">48px/64px</span>
            <h2 className="col3">Page Title</h2>
          </div>     
          <div className="flexRowTypography">
            <span className="col1">&lt;h3&gt;</span>
            <span className="col2">32px/40px</span>
            <h3 className="col3">Section Title</h3>
          </div>
          <div className="flexRowTypography">
            <span className="col1">&lt;h4&gt;</span>
            <span className="col2">24px/32px</span>
            <h4 className="col3">Sub-Section Title</h4>
          </div>
          <div className="flexRowTypography">
            <span className="col1">&lt;h5&gt;</span>
            <span className="col2">20px/32px</span>
            <h5 className="col3">Small Title</h5>
          </div>
          <div className="flexRowTypography">
            <span className="col1">.largeBodyCopy</span>
            <span className="col2">20px/32px</span>
            <span className="col3 largeBodyCopy">
              Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus, nisi erat porttitor.
            </span>
          </div>
          <div className="flexRowTypography">
            <span className="col1">.bodyCopy;</span>
            <span className="col2">16px/24px</span>
            <span className="col3 bodyCopy">
              Sed posuere consectetur est at lobortis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Inline Text Link Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui.
            </span>
          </div>
          <div className="flexRowTypography">
            <span className="col1">.caption</span>
            <span className="col2">12px/16px</span>
            <span className="col3 caption">
              Legal and Copyright information. Limit the use of this type style within interaction and product details
            </span>
          </div>
          <div className="flexRowTypography">
            <span className="col1">.labels16</span>
            <span className="col2">16px/24px</span>
            <span className="col3 labels16">
              Fermentum Pellentesque Adipiscing 
            </span>
          </div>
          <div className="flexRowTypography">
            <span className="col1">.labels14</span>
            <span className="col2">14px/24px</span>
            <span className="col3 labels14">
              Fermentum Pellentesque Adipiscing 
            </span>
          </div>
          <div className="flexRowTypography">
            <span className="col1">.textLink16</span>
            <span className="col2">16px/24px</span>
            <span className="col3 textLink16">Text Button or Link</span>
          </div>
          <div className="flexRowTypography">
            <span className="col1">.textLink14</span>
            <span className="col2">14px/24px</span>
            <span className="col3 textLink14">Text Button or Link</span>
          </div>
        </div>
      </div>
    );
  }
}
export default Typography