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
      <div className={this.props.lite ? "searchbar-lite":"searchbar"} style={{width:this.props.width}}>
        <Form inline className="searchbar-inside" >
          <div style={{padding:"0 5px 0 16px"}}><SearchIcon width="18px" fill="#a7a9ac" /></div>
          <FormControl type="text" placeholder={this.props.content} className="searchbar-inside" />
          <Button className="searchbar-inside">
            
          </Button>
        </Form>
      </div>
    );
  }
}
export default Searchbox