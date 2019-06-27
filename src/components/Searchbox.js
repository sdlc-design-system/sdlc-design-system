import React from 'react';
import './componentStyles/Searchbox.scss';
import FormControl from 'react-bootstrap/FormControl'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import SearchIcon from '../svgs/SearchIcon' 

class Searchbox extends React.Component {
  constructor ( props ) {
    super( props );
  }
  render () {
    return(
      <div className="searchbar" style={{width:this.props.width}}>
        <Form inline className="searchbar-inside" >
          <FormControl type="text" placeholder={this.props.content} className="searchbar-inside" />
          <Button className="searchbar-inside">
            <SearchIcon width="20px" fill="#a7a9ac" />
          </Button>
        </Form>
      </div>
    );
  }
}
export default Searchbox