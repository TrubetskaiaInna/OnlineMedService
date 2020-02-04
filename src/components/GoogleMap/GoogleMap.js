import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import img from '../../assets/image/drop.png'

const AnyReactComponent = ({ metka, text }) => <div className='metka' style={{color:'#158CBA'}}>
  {/*{metka}*/}
{text}
</div>

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
      <div style={{ height: '75vh', width: '1024px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB9GsetK6T_TvgzO6-zRC6RvCgGTSTFlu8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={49.430122}
            lng={32.059732}
            metka=<img src={img} alt={'img'} className="metka"/>
            text='OnlineMedService'
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default SimpleMap
