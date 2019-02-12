import React, { Component } from 'react';

class About extends Component
{
  modal =
  {
      position: 'relative',
      top: '-1em',
      backgroundColor: '#0A2069'
  };

  longRow =
  { width: '70%' };

  bestOfKernImage =
  { width: '80%' };

  bestSpot =
  {
      color: '#167CC4',
      marginTop: '0'
  };

  lowerText =
  {
      width: '80%',
      paddingBottom: '3em'
  };


  componentDidMount()
  {
      document.title = 'About';
  }

  render()
  {
      return (
          <main>
              <div className='content-container'>
                  <img className='main-image' src={ `${ process.env.PUBLIC_URL }/family.jpg` } alt='The Tony family' />
                  <div style={ this.modal } className='modal uppercase'>
                      Our Story
                  </div>
                  <div style={ this.longRow } className='col-small'>
                      <p className='right-align center-small'>
                          Tony{ '\'' }s Pizza was founded in 1979 in the small town of Delano, California.
                          At the time, Tony{ '\'' }s was one of the only pizza parlors in the primarily agricultural town.
                          As time went on and new pizza chains were established in Delano, Tony{ '\'' }s business grew due to their passion for serving a traditional pizza, with only the finest ingredients in a welcoming family atmosphere.
                      </p>
                      <div className='col award'>
                          <img style={ this.bestOfKernImage } src={ `${ process.env.PUBLIC_URL }/2016_best_of_kern.png` } alt='2016 Best of Kern Award' />
                          <p className='nowrap italic'>Voted 2016 Best of Kern</p>
                          <p style={ this.bestSpot } className='bolder nowrap uppercase'>Best Pizza Spot!</p>
                      </div>
                  </div>
                  <div style={ this.lowerText } className='col-small center-content-small'>
                      <img className='photograph' src={ `${ process.env.PUBLIC_URL }/tonyspizza.jpg` } alt='Tony' />
                      <p className='center-align'>
                          Anthony { '"' }Tony{ '"' } Martinez Jr. branched out to Bakersfield, CA in early 2005, and was an immediate hit serving up the same great tasting pizza that the Martinez family has been making for over 30 years.
                          Little has changed, except for the obvious firefighter decor that you will find in all six Tony{ '\'' }s Pizza locations.
                          Anthony and his family are involved in every aspect of the business and at any given time you can always find a member of the family at one of the locations to greet you or make you one of their specialty pizzas.
                          So whether you have a hankering for a big slice of { '"' }Bubba{ '\'' }s Chicken BBQ{ '"' }, a { '"' }Toni{ '\'' }s Veggie{ '"' } or the classic { '"' }Tony{ '\'' }s Combo{ '"' } you won{ '\'' }t leave Tony{ '\'' }s Pizza disappointed.
                      </p>
                  </div>
              </div>
          </main>
      );
  }
}

export default About;