import React, { Component } from 'react';

class Footer extends Component
{
  footer =
  {
      backgroundColor: '#F9FAFB',
      display: 'flex',
      justifyContent: 'space-evenly',
      listStyle: 'none',
  };

  italic =
  {
      fontStyle: 'italic',
      fontWeight: '400',
      marginBottom: '0.7em'
  };

  colored =
  {
      fontSize: '1.2em',
      color: '#167CC4',
      marginTop: '0.2em',
      marginBottom: '0.2em'
  };

  rights = { marginTop: '0em' };

  icon =
  {
      color: '#60A6D5',
      marginRight: '0.4em',
      marginBottom: '0.5em'
  };

  render()
  {
      return (
          <footer style={ this.footer } className='col-small'>
              <div className='col flex-1'>
                  <h4 style={ this.italic } className='capitalize'>Our pizzas aren{ '\'t' } made...</h4>
                  <h3 style={ this.colored } className='uppercase'>They are crafted!</h3>
              </div>
              <div className='col'>
                  <p className='center-align capitalize'>Family owned, operated and satisfying Kern County{ '\'s' } pizza cravings since 1979!</p>
                  <p style={ this.rights } className='center-align capitalize'>© 2018 Tony{ '\'s' } Pizza Company. All Rights Reserved.</p>
              </div>
              <div className='row flex-1'>
                  <a href='https://www.facebook.com/Tonys-Pizza-1554000648251770'><i style={ this.icon } className='fab fa-lg fa-facebook hover'></i></a>
                  <a href='https://www.youtube.com/watch?v=ia_Y7J9tUZ8'><i style={ this.icon } className='fab fa-lg fa-youtube hover'></i></a>
                  <a href='https://www.instagram.com/tonyspizzacompany/'><i style={ this.icon } className='fab fa-lg fa-instagram hover'></i></a>
              </div>
          </footer>
      );
  }
}

export default Footer;
