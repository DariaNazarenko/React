import React from "react";

class Weather extends React.Component
{
  render(){
    return(
      <div>
      { this.props.city &&
        <div>
        <p>Place: {this.props.city}, {this.props.country}</p>
        <p>Temperature: {this.props.temp}</p>
        <p>Sunrise: {this.props.sunrise}</p>
        <p>Sunset: {this.props.sunset}</p>
        </div>
      }
      <p>{this.props.error}</p>
      </div>
    );
  }
}

export default Weather;
