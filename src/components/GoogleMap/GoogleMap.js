import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div className='metka' style={{color:'red'}}> {text} </div>

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 49.43,
      lng: 32.06
    },
    zoom: 16
  }

  render () {
    return (
      <div style={{ height: '60vh', width: '1024px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB9GsetK6T_TvgzO6-zRC6RvCgGTSTFlu8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={49.430097}
            lng={32.059752}
            text="OnlineMedService"
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default SimpleMap
