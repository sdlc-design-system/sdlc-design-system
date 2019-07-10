import React from 'react';
import './componentStyles/Sidebar.scss';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.list=[['colors','Colors'],
              ['typography','Typography'],
              ['icons','Icons'],
              ['buttons','Buttons'],
              [['forms','Forms'],['standardInput','Standard Text Input'],['dropdownMenu','Dropdown Menu'],['radioButtons','Radio Buttons'],['checkBox','Checkboxes'],['switch','Switch'],['search','Searchbox']],
              [['containers','Containers'],['panel','Panel'],['accordion','Accordion'],['modal','Modal']],
              [['content','Content'],['dividers','Dividers'],['loadingIndicator','Loading Indicatior']]
            ]
    //reset will take the "list", find the submenu headings, and build an object that sets each heading to false
    this.reset=Object.assign(...this.list.filter(x=>x.length>2).map(x=>x[0][0]).map(x=>({[x]:false})))
    this.accordionHeadings=Object.keys(this.reset)
    this.headingsOnly=this.list.map(x=>x.length===2 ? x[1] : x[0][1])
    this.state={...this.reset}
  }

  openClose = (item) => { //opens and closes subheadings
    this.setState({ ...this.reset, [item]:!this.state[item] });
  };
 
  handleClick = item => {
    if (this.props.activeTab !== item) this.props.onTabClick(item)
  };

  render() {
    for(let i=0;i<this.list.length;i++){//loop thru the list
      if(this.list[i].length >2){//searching for only the headings that have subheadings
        for(let j=1;j<this.list[i].length;j++){//loop through the subheadings
          if(this.props.activeTab === this.list[i][j][0]){ //if we've arrived on a heading that contains subheadings,
            if(this.state[this.list[i][0][0]]===false){//and the accordion is currently marked unopened (false),
              this.setState({ ...this.reset, [this.list[i][0][0]]: true });//go ahead and mark it open (true)
              break;//don't waste any more time in the loop...get out.
            }
          }
        }
      }
    }

    return (
      <div className="sideVerticalLine disappearingSideBar">
        {this.list.map(x=>x.length===2? //fix later...buggy if have a heading with only one sub in it.
          <div className={this.props.activeTab === x[0] ? 'active' : ''}>
            <a href={"#"+x[0]} onClick={() => this.handleClick(x[0])}>
              {x[1]}
            </a>
          </div>
          :
          <span>
            <div
              onClick={()=>this.openClose(x[0][0])}
              className={this.props.activeTab === x[0][0] ? 'active' : ''}>
              <a href={"#"+x[0][0]} onClick={() => this.handleClick(x[0][0])}>
                {x[0][1]}
              </a>
            </div>
            {this.state[x[0][0]] ? x.map((y,index)=>index>0?
              <div className="indentSidebar">
                <div
                  className={
                    this.props.activeTab === y[0] ? 'active' : ''
                  }>
                  <a
                    href={"#"+y[0]}
                    onClick={() => this.handleClick(y[0])}>
                    {y[1]}
                  </a>
                </div>
              </div>:''):''}
          </span>    
        )}
      </div>
    );
  }
}
export default Sidebar;
