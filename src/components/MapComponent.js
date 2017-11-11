import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { Information } from '../components';

const defaultCenter={ lat: 39.8283, lng: -98.5795 }; /* of the US */
const lehman={ lat: 40.8733, lng: -73.8941 };
const ucDavis= { lat: 38.5382, lng: -121.7617 };
const isMarkerShown=true;

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDCXCgYKw10ci0cm1Oe7gCU8353rS6riDw&libraries=places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `34.6em` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={4}
    center={defaultCenter}
  >
    {props.isMarkerShown && <Marker position={lehman} onClick={props.onMarkerClick1}/>}
    {props.isMarkerShown && <Marker position={ucDavis} onClick={props.onMarkerClick2}/>}
  </GoogleMap>
)

export default class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      img: ''
    };
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick1() {
    this.setState({img: 'lehman'});
  }

  handleClick2() {
    this.setState({img: 'ucDavis'});
  }

  render() {

    return (
      <div>
        <MyMapComponent
          isMarkerShown={isMarkerShown}
          onMarkerClick1={this.handleClick1}
          onMarkerClick2={this.handleClick2}
          />
        <Information newImg={this.state.img}/>
      </div>
    )
  }
}
