import React, { Component } from 'react';

class Menu extends Component
{
  modal =
  {
      marginTop: '1em',
      backgroundColor: '#167CC4',
      marginBottom: '1.5em'
  };

  componentDidMount()
  {
      document.title = 'Menu';
  }

  render()
  {
      return (
          <main>
              <div className='content-container'>
                  <img className='main-image' src={ `${ process.env.PUBLIC_URL }/menu.jpg` } alt='Pizza, wings and food' />
                  <div style={ this.modal } className='modal uppercase'>
                      Menu coming soon
                  </div>
              </div>
          </main>
      );
  }
}

export default Menu;
