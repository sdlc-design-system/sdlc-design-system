import React from 'react';
import Prism from 'prismjs';
import Searchbox from './Searchbox';
import './componentStyles/SearchboxDemo.scss';

class SearchboxDemo extends React.Component {
  render() {
    return (
      <div>
        <h4 className="header-padding">Searchbox</h4>
        <div>
          Search bar 1 can be used in open spaces where the background is not
          noisy. To use search bar 1, add "lite : {'{'}true{'}'}" to your code.
          <br />
          Search bar 2 can be used on banners or anywhere with a colorful
          background.
        </div>
        <br />
        <div className="searchboxDemo">
          <div className="searchboxDemoPadding">
            <Searchbox content="search library" width="300px" lite={true} />
          </div>
          <Searchbox content="search library" width="300px" />
        </div>
        <div />
        <br />
        <pre>
          <code className="language-jsx">
            {`
            import Searchbox from './Searchbox'

            ...
            
            <Searchbox 
              onClick = "........"
              content = "search library"
              width = "300px"
              lite = {true} //leave out completely to use search bar 2
            />
          `}
          </code>
        </pre>
      </div>
    );
  }
}
export default SearchboxDemo;
