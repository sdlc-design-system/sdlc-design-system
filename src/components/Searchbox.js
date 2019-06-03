import React from 'react';
import './componentStyles/Searchbox.scss';
import FormControl from 'react-bootstrap/FormControl'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import IconMagnifyingGlass from '../svgs/IconMagnifyingGlass' 

class Searchbox extends React.Component {
  constructor ( props ) {
    super( props );
  }
  render () {
    return(
      <div className="searchbar">
        <Form inline className="searchbar-inside">
          <FormControl type="text" placeholder="search library" className="searchbar-inside" />
          <Button className="searchbar-inside">
            <IconMagnifyingGlass width="20px" fill="#a7a9ac" />
          </Button>
        </Form>
      </div>
    );
  }
}
export default Searchbox