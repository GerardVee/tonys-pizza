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
      fontSize: '0.7em'
  };

  icon =
  {
      width: 'auto',
      height: '38px',
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
          <header style={ this.header } className='mobile-header'>
              <NavLink exact to='/'>
                  <img style={ this.icon } src={ `${ process.env.PUBLIC_URL }/white-logo.png` } alt="Tony's Piza white logo" />
              </NavLink>
              <NavLink style={ this.link } exact to='/menu'>
                  <i className='white bold fas fa-lg fa-book-open hover'></i>
              </NavLink>
              <NavLink style={ this.link } exact to='/parties'>
                  <i className='white bold fas fa-lg fa-gifts hover'></i>
              </NavLink>
              <NavLink style={ this.link } exact to='/about'>
                  <i className='white bold fas fa-lg fa-hands-helping hover'></i>
              </NavLink>
              <NavLink style={ this.link } exact to='/locations'>
                  <button style={ this.button } className='white bold round button uppercase'>Show Locations</button>
              </NavLink>
          </header>
      );
  }
}

export default Header;
