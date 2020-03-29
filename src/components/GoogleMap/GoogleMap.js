import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import img from "../../assets/image/drop.png";
import "./GoogleMap.scss";

const MarkerComponent = ({ marker }) => <div className="marker">{marker}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 49.43,
      lng: 32.06
    },
    zoom: 16
  };

  render() {
    return (
      <div className='map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB9GsetK6T_TvgzO6-zRC6RvCgGTSTFlu8" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <MarkerComponent
            lat={49.430122}
            lng={32.059732}
            marker=<img src={img} alt={"img"} className="markerImg" />
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
