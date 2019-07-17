import React from 'react';
import './componentStyles/Sidebar.scss';

class Sidebar extends React.Component {
  constructor(props) {
    super(props); 
    //reset will take the "list", find the submenu headings, and build an object that sets each heading to false
    this.reset=Object.assign(...this.props.list.filter(x=>x.length>2).map(x=>x[0][0]).map(x=>({[x]:false})))
    this.state={...this.reset}
  }

  openClose = (item) => { //opens and closes subheadings
    this.setState({ ...this.reset, [item]:!this.state[item] });
  };
 
  handleClick = item => {
    if (this.props.activeTab !== item) this.props.onTabClick(item)
  };

  render() {
    loop1: for(let i=0;i<this.props.list.length;i++){//loop thru the list
      if(this.props.list[i].length >2){//searching for only the headings that have subheadings
        for(let j=1;j<this.props.list[i].length;j++){//loop through the subheadings
          if(this.props.activeTab === this.props.list[i][j][0]){ //if we've arrived on a heading that contains subheadings,
            if(this.state[this.props.list[i][0][0]]===false){//and the accordion is currently marked unopened (false),
              this.setState({ ...this.reset, [this.props.list[i][0][0]]: true });//go ahead and mark it open (true)
              break loop1;//don't waste any more time in the loop...get out.
            }
          }
        }
      }
    }

    return (
      <div className="sideVerticalLine disappearingSideBar">
        {this.props.list.map(x=>typeof x[0]=== 'string' ? //if there are no subheadings, do this section
          <div key={x[0]} className={this.props.activeTab === x[0] ? 'active' : ''}>
            <a 
              href={"#"+x[0]} 
              onClick={() => this.handleClick(x[0])}
              className={this.props.activeTab === x[0] ? 'highlight' : ''}
            >
              {x[1]}
            </a>
          </div>
          :
          <span key={x[0][0]}>
            <div
              onClick={()=>this.openClose(x[0][0])} //opens and closes the accordion subheadings
              className={this.props.activeTab === x[0][0] ? 'active' : ''}>
              <a 
                href={"#"+x[0][0]} 
                onClick={() => this.handleClick(x[0][0])}
                className={this.props.activeTab === x[0][0] ? 'highlight' : ''}
              >
                {x[0][1]}
              </a>
            </div>
            {(this.state[x[0][0]] && //check if heading is open
              x.flat() //flatten the "list" array
              .filter((y,index)=>!(index%2)) //pull out the capitalized array pair parts
              .includes(this.props.activeTab)) ? //so...since the heading IS open, now check if we're in one of the subheadings.
                x.map((y,index)=>index>0 ? //if we should show the open accordion, go ahead and map through it, starting with the 2nd thing (the first thing was the heading itself)
              <div key={y[0]} className="indentSidebar">
                <div
                  className={
                    this.props.activeTab === y[0] ? 'active' : ''
                  }>
                  <a
                    key={y[0]+index}
                    href={"#"+y[0]}
                    onClick={() => this.handleClick(y[0])}
                    className= {this.props.activeTab === y[0] ? 'highlight' : ''}
                  >
                    {y[1]}
                  </a>
                </div>
              </div>:''):''}
          </span>    
        )}
      </div>
    )
  }
}
export default Sidebar;
