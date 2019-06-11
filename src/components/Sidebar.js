import React from 'react';
import './componentStyles/Sidebar.scss';

class Sidebar extends React.Component {
  constructor ( props ) {
    super( props );
  }
  render () {
    return(
      <div>
        <div className="sideVerticalLine"></div>
        <div className="disappearingSideBar">
          <div>
            {this.props.content.map((item,index)=>
              <div 
                className="boxed" 
                key={index}>
                <a 
                  href={`#${item.id}-section`}
                  className="sidebarList"
                >
                  {item.title}
                </a>
              </div>
            )}  
          </div>
        </div>
      </div>
    );
  }
}
export default Sidebar