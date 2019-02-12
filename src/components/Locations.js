import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const locations =
[
    {
        place_id: 'ChIJs8W_Tv1C6oARqsra40OildU',
        lat: 35.4025988,
        long: -119.1614981,
        time: 'Daily 10AM-10PM',
        number: '6615884700'
    },
    {
        place_id: 'ChIJM1cl-r5B6oARwoqS3m4nvw8',
        lat: 35.3341458,
        long: -119.1429434,
        time: 'Daily 10AM-10PM',
        number: '6613969608'
    },
    {
        place_id: 'ChIJIRfN0qpX6oARzEX2m_MThm4',
        lat: 35.499976,
        long: -119.343001,
        time: 'Daily 7AM-10PM',
        number: '6617469244'
    },
    {
        place_id: 'ChIJ01v2OgP26YARhqAQY8FVmB4',
        lat: 34.9855314,
        long: -119.0119216,
        time: 'Mon-Sat: 10AM-9PM, Sun: 10AM-8PM',
        number: '6618582425'
    },
    {
        place_id: 'ChIJJ3mmWODl6oARjyKttSJBDKU',
        lat: 35.7900102,
        long: -119.3241484,
        time: 'Daily 7AM-10PM',
        number: '6617209214'
    },
    {
        place_id: 'ChIJm-NgMd1t6oARegxqr_a86B0',
        lat: 35.3970096,
        long: -118.9549432,
        time: 'Daily 7AM-10PM',
        number: '6613660129'
    },
    {
        place_id: 'ChIJa-8LG2Dv6oARIrIiEc6TgZA',
        lat: 35.775013,
        long: -119.2316171,
        time: 'Daily 9AM-10PM',
        number: '6617256678'
    }
];

class TonysLogo extends Component
{
  state = { text: '' };

  time =
  {
      fontWeight: 'bolder',
      color: '#167CC4',
      fontSize: '1em',
      whiteSpace: 'nowrap',
      zIndex: 2
  };

  logoSize =
  {
      height: 'auto',
      width: '5.5em'
  };

  render()
  {
      return (
          <div className='hover' { ...this.props } onMouseEnter={ () => this.setState({ text: this.props.text }) } onMouseLeave={ () => this.setState({ text: '' }) }>
              <img style={ this.logoSize } src={ process.env.PUBLIC_URL + '/alt-tonyslogo.png' } alt="Tony's Piza colored logo" />
              { this.state.text && <p style={ this.time }>{ this.state.text }</p> }
          </div>
      );
  }
}

class Locations extends Component
{
  state =
  { displayText: '' };

  modal =
  {
      position: 'relative',
      backgroundColor: '#0A2069'
  };

  componentDidMount()
  {
      document.title = 'Locations';
  }

  render()
  {
      return (
          <main>
              <div className='content-container'>
                  <div style={ this.modal } className='modal uppercase'>
            Locations
                  </div>
                  <div className='map'>
                      <GoogleMapReact
                          bootstrapURLKeys={{ key: 'AIzaSyDlg-wCZASKsjFnEiLEXCeSSF-zWUgChSw' }}
                          defaultCenter={{ lat: 35.4025988, lng: -119.1614981 }}
                          defaultZoom={ 11 }
                      >
                          { locations.map(l => (
                              <TonysLogo key={ l.place_id } lat={ l.lat } lng={ l.long }
                                  onClick={ () => window.open(`https://www.google.com/maps/search/?api=1&query=Tony&query_place_id=${ l.place_id }`) }
                                  text={ l.time }
                              />)) }
                      </GoogleMapReact>
                  </div>
              </div>
          </main>
      );
  }
}

export default Locations;