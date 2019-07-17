import React from 'react';
import './componentStyles/SmallMenu.scss';

class SmallMenu extends React.Component {
  constructor ( props ) {
    super( props );
  }

  render () {
    return (
      <div className="smallMenu">
        {this.props.list.map(x=>typeof x[0]=== 'string' ? //if there are no subheadings, do this section
          <div>
            <a href={"#"+x[0]} onClick={this.props.showSmallMenu}>
              {x[1]}
            </a>
          </div>
          :
          <span key={x[0][0]}>
            <div>
              <a href={"#"+x[0][0]} onClick={this.props.showSmallMenu}>
                {x[0][1]}
              </a>
            </div>
            {x.map((y,index)=>index>0 ?
              <div key={y[0]} className="indentSidebar">
                <div>
                  <a
                    key={y[0]+index}
                    href={"#"+y[0]}
                    onClick={this.props.showSmallMenu}>
                    {y[1]}
                  </a>
                </div>
              </div>
              :'')}
          </span>    
        )}
      </div>
    )

  }
} 
export default SmallMenu