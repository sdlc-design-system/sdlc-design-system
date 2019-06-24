import React from 'react';
import './componentStyles/Header.scss';
import SdlcLogo from '../svgs/SdlcLogo' 
import Hamburger from '../svgs/Hamburger' 
import SearchIcon from '../svgs/SearchIcon' 
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Searchbox from './Searchbox'
import Nav from 'react-bootstrap/Nav'

class Header extends React.Component {
  constructor ( props ) {
    super( props );
  }
  render () {
    return(
      <div className="headerNav">  
        <div className="headerNavSpacing" style={{display:"flex",justifyContent:"space-between"}}>  
          <Container fluid className="headerLarge">
            <Navbar>
              <div>
                <Navbar.Brand href="#home">
                  <SdlcLogo
                    width="103"
                    className="d-inline-block align-top"
                    alt="SDLC Partners logo"
                  />
                  <span className="headerTitle d-inline-block">design system</span>
                </Navbar.Brand>
              </div>
                <Searchbox />
            </Navbar>
          </Container>

          <div className="headerSmall">
            <div><Hamburger width="28px" fill="#44687D" /></div>
            <div><SdlcLogo
              width="80"
              alt="SDLC Partners logo"
            /></div>
            <div><SearchIcon width="20px" fill="#44687D" /></div>
          </div>
        </div>   
        <hr className="heavyDivider" style={{marginTop:"0",marginBottom:"0"}}></hr>
      </div>
    );
  }
} 
export default Header