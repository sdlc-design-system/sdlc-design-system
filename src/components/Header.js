import React from 'react';
import './componentStyles/Header.scss';
import SdlcLogo from '../svgs/SdlcLogo' 
import IconHamburger from '../svgs/IconHamburger' 
import IconMagnifyingGlass from '../svgs/IconMagnifyingGlass' 
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
        <Container fluid className="headerLarge">
          <Navbar>
            <Navbar.Brand href="#home">
              <SdlcLogo
                width="103"
                className="d-inline-block align-top"
                alt="SDLC Partners logo"
              />
              <span className="headerTitle d-inline-block">design system</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Searchbox />
            </Navbar.Collapse>
          </Navbar>
        </Container>

        <div className="headerSmall">
          <div><IconHamburger width="28px" fill="#44687D" /></div>
          <div><SdlcLogo
            width="80"
            alt="SDLC Partners logo"
          /></div>
          <div><IconMagnifyingGlass width="20px" fill="#44687D" /></div>
        </div>

        <hr className="heavyDivider" style={{margin:0}}></hr>
      </div>
    );
  }
} 
export default Header