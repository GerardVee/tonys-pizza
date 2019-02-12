import React, { Component } from 'react';
import Slider from 'react-slick';

class App extends Component
{
  settings =
  {
      dots: true,
      infinite: true,
      fade: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: false,
      customPaging: () => <div className='dot'></div>,
      appendDots: dots => (
          <div>
              <ul style={{ margin: '5px' }}>{ dots }</ul>
          </div>
      )
  };

  componentDidMount()
  {
      document.title = 'Tony\'s Pizza';
  }

  render()
  {
      return (
          <main>
              <Slider { ...this.settings }>
                  <div>
                      <img className='slide-img' src={ `${ process.env.PUBLIC_URL }/carousel/banner${ 1 }.jpg` } alt='Front desk' />
                      <div className='overlay-text uppercase'>
                          Come in for a traditional pizza parlor experience!
                      </div>
                  </div>
                  <div>
                      <img className='slide-img' src={ `${ process.env.PUBLIC_URL }/carousel/banner${ 2 }.jpg` } alt='Beautiful pizza' />
                      <div className='overlay-text uppercase'>
                          Extraordinary pizza { '&' } no compromise
                      </div>
                  </div>
                  <div>
                      <img className='slide-img' src={ `${ process.env.PUBLIC_URL }/carousel/banner${ 3 }.jpg` } alt='Pizza with fresh toppings' />
                      <div className='overlay-text uppercase'>
                          We never sacrifice quality and never skimp on toppings!
                      </div>
                  </div>
                  <div>
                      <img className='slide-img' src={ `${ process.env.PUBLIC_URL }/carousel/banner${ 4 }.jpg` } alt='Varied pizza' />
                      <div className='overlay-text uppercase'>
                          Order Tony{ '\'' }s combo or the famous chile verde pizza.
                      </div>
                  </div>
                  <div>
                      <img className='slide-img' src={ `${ process.env.PUBLIC_URL }/carousel/banner${ 5 }.jpg` } alt='Arcade games' />
                      <div className='overlay-text uppercase'>
                          Family fun for everyone with classic arcade games!
                      </div>
                  </div>
              </Slider>
          </main>
      );
  }
}

export default App;
