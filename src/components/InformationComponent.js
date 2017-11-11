import React from "react";
import Ethnicity_Donut from "../Ethnicity_Donut.svg"
import lehman_race_time from "../lehman_race_time_720.png"
import Gender_Donut from "../Gender_Donut.svg"
import lehman_gender_time from "../lehman_gender_time_720.png"

class Information extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ''
    };
  }

/*  componentWillReceiveProps(nextProps) {
    this.setState({
      img: this.nextProps.newImg
    });
  }
*/
  render() {
    return (
      <div>
        { (this.props.newImg == 'lehman')
          ? <div>
              <h1>Ethnic Diversity</h1>
              <img src={Ethnicity_Donut} class="EthnicDonut"/>
              <img src={lehman_race_time} class="lehmanRace"/>
              <h1>Gender Diversity</h1>
              <img src={Gender_Donut} class="GenderDonut"/>
              <img src={lehman_gender_time} class="lehmanGender"/>
            </div>:
            <img src='' />
        }
      </div>
    );
  }
}

export default Information;
