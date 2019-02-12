import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Parties extends Component
{
  modal =
  {
      position: 'relative',
      top: '-1em',
      backgroundColor: '#0A2069'
  };

  longText =
  {
      textAlign: 'center',
      width: '65%'
  };

  componentDidMount()
  {
      document.title = 'Parties';
  }

  render()
  {
      return (
          <main>
              <div className='content-container'>
                  <img className='main-image' src={ `${ process.env.PUBLIC_URL }/parties.jpg` } alt='Child at party' />
                  <div style={ this.modal } className='modal uppercase'>
                      Book your party
                  </div>
                  <p style={ this.longText }>
                      Parties are always a blast at Tony{ '\'' }s Pizza! Call and register to have your party with us!
                      Click <NavLink exact to='/locations'>here</NavLink> to find a Tony{ '\'' }s Pizza near you.
                      We do parties at all of our locations and have dedicated party rooms at our Coffee Road location in Bakersfield.
                      We even have FREE Wi-Fi!
                  </p>
                  <p style={ this.longText }>
                      Email us at <a href='mailto:info@TonysPizzaCompany.com'>info@TonysPizzaCompany.com</a> and let us know about your party or special event.
                  </p>
              </div>
          </main>
      );
  }
}

export default Parties;
