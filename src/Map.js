import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" ,zIndex:"13"}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA0WpmW-Ue25X_4SaVnylWnSRtqrdG1vlA" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map

// AIzaSyA0WpmW-Ue25X_4SaVnylWnSRtqrdG1vlA
