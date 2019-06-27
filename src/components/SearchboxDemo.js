import React from 'react';
import Prism from 'prismjs';
import Searchbox from './Searchbox'

class SearchboxDemo extends React.Component {
  constructor ( props ) {
    super( props );
  }
  render () {
    return(
      <div>
        <h4>Searchbox</h4>
        <Searchbox content="search library" width="300px"/>
        <div></div><br />
        <pre><code className="language-jsx">
          {`
            import Searchbox from './Searchbox'

            ...
            
            <Searchbox 
              onClick = "........"
              content = "search library"
              width="300px"
            />
          `} 
        </code></pre>
      </div>
    );
  }
}
export default SearchboxDemo