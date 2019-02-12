import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component
{
  active =
  {
      fontWeight: 'bold',
      color: 'red'
  };

  header =
  {
      backgroundColor: '#0A2069',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      listStyle: 'none',
      padding: '0.3em 0em'
  };

  button =
  {
      backgroundColor: 'transparent',
      borderColor: 'white',
      borderStyle: 'solid',
      fontSize: '1em'
  };

  icon =
  {
      width: 'auto',
      height: '56px',
      position: 'relative',
      top: '-6px'
  };

  link =
  {
      textDecoration: 'none',
      color: 'none'
  };

  render()
  {
      return (
          <header style={ this.header } className='header'>
              <NavLink exact to='/'>
                  <img style={ this.icon } className='hover' src={ `${ process.env.PUBLIC_URL }/white-logo.png` } alt="Tony's Piza white logo" />
              </NavLink>
              <NavLink style={ this.link } exact to='/menu'>
                  <p className='white bold uppercase hover'>Menu</p>
              </NavLink>
              <NavLink style={ this.link } exact to='/parties'>
                  <p className='white bold uppercase hover'>Parties</p>
              </NavLink>
              <NavLink style={ this.link } exact to='/about'>
                  <p className='white bold uppercase hover'>About</p>
              </NavLink>
              <NavLink style={ this.link } exact to='/locations'>
                  <button style={ this.button } className='white bold round button uppercase hover'>Show Locations</button>
              </NavLink>
          </header>
      );
  }
}

export default Header;
