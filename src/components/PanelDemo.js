import React from 'react';
import './componentStyles/PanelDemo.scss';
import Panel from './Panel';

class PanelDemo extends React.Component {
  render() {
    return (
      <div>
        <h4 className="header-padding">Panel</h4>
        <div className="basicBorder">
          <div>
            <Panel
              content={[
                {
                  title: 'Label 1',
                  content:
                    'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'
                },
                {
                  title: 'Label 2',
                  content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                  title: 'Label 3',
                  content:
                    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
                }
              ]}
            />
          </div>
        </div>

        <br />
        <pre>
          <code className="language-jsx">
            {`
            import Panel from './Panel'
            
            ...
            
            <Panel
              content={[
                {title:'Label 1', content:'Anim pariatur cliche reprehenderit...'},
                {title:'Label 2', content:'Lorem ipsum dolor sit amet, consectetur...'},
                {title:'Label 3', content:'Sed ut perspiciatis unde omnis iste...'},
              ]}
            />
          `}
          </code>
        </pre>
      </div>
    );
  }
}
export default PanelDemo;
