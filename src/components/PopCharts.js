import React, { Component } from "react";
import Chart from "react-apexcharts";

import "./PopCharts.css";

class PopChart extends Component {
  state = {
    options: {
      chart: {
        background: "#f4f4f4",
        foreColor: "#333"
      },
      xaxis: {
        categories: [
          "New York",
          "Los Angeles",
          "Chicago",
          "Houston",
          "Philadelphia",
          "Phoenix",
          "San Antonio",
          "San Diego",
          "Dallas",
          "San Jose"
        ]
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      fill: {
        colors: ["#7ddbf3"],
        type: "pattern",
        pattern: {
          style: "slantedLines",
          width: 6,
          height: 6,
          strokeWidth: 2
        }
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: "Largest Cities by Population",
        align: "center",
        margin: 20,
        offsetY: 20,
        style: {
          fontSize: "20px"
        }
      }
    },
    series: [
      {
        name: "Population",
        data: [
          8550405,
          3971883,
          2720546,
          2296224,
          1567442,
          1563025,
          1469845,
          1394928,
          1300092,
          1026908
        ]
      }
    ]
  };

  changeOrientationHandler = () => {
    //Following code is to change the state of horizontal to true,
    //for that we used the spread operator to immutably change it.
    this.setState({
      options: {
        ...this.state.options,
        plotOptions: {
          ...this.state.options.plotOptions,
          bar: {
            ...this.state.options.plotOptions.bar,
            horizontal: !this.state.options.plotOptions.bar.horizontal //This makes the button toggle between orientations
          }
        }
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height="450"
          width="100%"
        />
        <button className={"button"} onClick={this.changeOrientationHandler}>
          Switch Orientation
        </button>
      </React.Fragment>
    );
  }
}

export default PopChart;
