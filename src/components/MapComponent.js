import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { Information } from '../components';
import Random from '../randomImg.png';


const defaultCenter={ lat: 40.7134, lng: -74.0055 }; /* NYC */
const lehman={ lat: 40.8733, lng: -73.8941 };
const ucDavis= { lat: 38.5382, lng: -121.7617 };
const isMarkerShown=true;

/* child component ? */
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
    defaultZoom={9}
    center={defaultCenter}
  >
    {props.isMarkerShown && <Marker position={lehman} onClick={props.onMarkerClick}/>}
    {props.isMarkerShown && <Marker position={ucDavis} />}
  </GoogleMap>
)

/* parent component ? */
export default class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      img: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      img: 'lehman'
    });
  }

  render() {

    return (
      <div>
        <MyMapComponent
          isMarkerShown={isMarkerShown}
          onMarkerClick={this.handleClick}
          />
        <Information newImg={this.state.img}/>
      </div>
    )
  }
}
