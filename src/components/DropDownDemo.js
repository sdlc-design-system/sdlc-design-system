import React from 'react';
import './componentStyles/DropDownDemo.scss';
import DropDownSDLC from './DropDownSDLC';

class DropDownDemo extends React.Component {
  render() {
    return (
      <div>
        <h4 className="header-padding">Dropdown Menus</h4>
        <div className="flexRowButtonsDemo">
          <span className="buttonDemoPadding">
            <DropDownSDLC
              size={'large'}
              secondary={false}
              content={[
                { title: 'Label 1', href: '#some1junk' },
                { title: 'Label 2', href: '#some2junk' },
                { title: 'Label 3', href: '#some3junk' }
              ]}
              title={'Dropdown Menu'}
              divider={2}
            />
          </span>
          <span className="buttonDemoPadding">
            <DropDownSDLC
              size={'large'}
              secondary={true}
              content={[
                { title: 'Label 1', href: '#some1junk' },
                { title: 'Label 2', href: '#some2junk' },
                { title: 'Label 3', href: '#some3junk' }
              ]}
              title={'Dropdown Menu'}
            />
          </span>
        </div>
        <br />
        <div>Large, Primary, with a Divider (Dropdown button on the left)</div>
        <pre>
          <code className="language-jsx">
            {`
          import DropDownSDLC from './DropDownSDLC'
 
          ...
                    
          <DropDownSDLC 
            size={"large"} //options: large, medium, small
            secondary={false} //this produces a "primary" button
            content={[
              {title:'Label 1',href:'#somewhere1'},
              {title:'Label 2',href:'#somewhere2'},
              {title:'Label 3',href:'#somewhere3'}
            ]}
            title ={'Dropdown Menu'}
            divider = {2} //*optional...the number is the row where the divider will be placed 
          />
          `}
          </code>
        </pre>
        <br />
      </div>
    );
  }
}
export default DropDownDemo;
