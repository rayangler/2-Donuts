import React from "react";
import Ethnicity_Donut from "../img/Ethnicity_Donut.svg"
import lehman_race_time from "../img/lehman_race_time_720.png"
import Gender_Donut from "../img/Gender_Donut.svg"
import lehman_gender_time from "../img/lehman_gender_time_720.png"
import ethnicity_uc from "../img/ethnicity-uc.svg"
import uc_race_time from "../img/uc_race_time.png"
import Gender_UC from "../img/Gender-UC.svg"
import uc_gender_time from "../img/uc_gender_time.png"

class Information extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ''
    };
  }

  render() {
    return (
      <div>
        { (this.props.newImg === 'lehman')
          ? <div>
              <h1> NS Hacks </h1>
              <h2> Ethnic Diversity </h2>
              <img src={Ethnicity_Donut} class="Donut"/>
              <img src={lehman_race_time} class="lineGraph"/>
              <h2> Gender Diversity </h2>
              <img src={Gender_Donut} class="Donut"/>
              <img src={lehman_gender_time} class="lineGraph"/>
            </div> :
            <div/>
        }
        { (this.props.newImg === 'ucDavis')
          ? <div>
            <h1> Davis Hack </h1>
            <h2> Ethnic Diversity </h2>
            <img src={ethnicity_uc} class="Donut"/>
            <img src={uc_race_time} class="lineGraph"/>
            <h2> Gender Diversity </h2>
            <img src={Gender_UC} class="Donut"/>
            <img src={uc_gender_time} class="lineGraph"/>
          </div> :
          <div/>
        }
      </div>
    );
  }
}

export default Information;
