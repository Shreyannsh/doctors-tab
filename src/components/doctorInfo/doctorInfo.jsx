import "../../App.css";
import "./doctorInfo.css";

import { Rating, Star } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import * as echarts from "echarts";
import ReactEcharts from "echarts-for-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Chart } from "react-google-charts";

const DoctorInfo = () => {
  const selectedDoctorId = useSelector((state) => state.selectedDoctor);
  const doctorsList = useSelector((state) => state.doctorsList);

  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#fbf1a9",
  };

  const selectedDoctor = doctorsList.find(
    (doctor) => doctor.id === selectedDoctorId
  );

  const optionss = {
    legend: {
      top: "bottom",
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },

    series: [
      {
        name: "Nightingale Chart",
        type: "pie",
        radius: [0, 50],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 0,
        },
        label: {
          show: false,
        },
        data: selectedDoctor.expertise,
      },
    ],
  };
  const data = selectedDoctor.expertise;

  const options = {
    legend: {
      poisiton: "right",
      alignment: "center",
      paddingLeft: "30px",
      textStyle: { color: "white", fontSize: 14 },
    },
    height: 80,
    backgroundColor: "#242834",
    borderRadius: "10px",
    chartArea: {
      left: 0,
      right: 50,
      top: 5,
      bottom: 5,
      width: "30%",
      height: "35%",
    },
  };

  // useEffect(() => {
  //   // Get the container element
  //   const chartContainer = document.getElementById("myChart");

  //   // Initialize ECharts with the container
  //   const myChart = echarts.init(chartContainer);

  //   const options = {
  //     legend: {
  //       top: "bottom",
  //     },
  //     toolbox: {
  //       show: true,
  //       feature: {
  //         mark: { show: true },
  //         dataView: { show: true, readOnly: false },
  //         restore: { show: true },
  //         saveAsImage: { show: true },
  //       },
  //     },

  //     series: [
  //       {
  //         name: "Nightingale Chart",
  //         type: "pie",
  //         radius: [0, 50],
  //         center: ["50%", "50%"],
  //         roseType: "area",
  //         itemStyle: {
  //           borderRadius: 0,
  //         },
  //         label: {
  //           show: false,
  //         },
  //         data: selectedDoctor.expertise,
  //       },
  //     ],
  //   };

  //   // Set the options and render the chart
  //   myChart.setOption(options);

  //   // Clean up function
  //   return () => {
  //     // Dispose the chart instance when component unmounts
  //     myChart.dispose();
  //   };
  // }, [selectedDoctor]);

  return (
    <div className="section">
      <header className="heading">Profile</header>
      <img
        className="profileImage"
        src={selectedDoctor.profilePicture}
        alt=""
      />
      <div className="infoSection">
        <div className="horizontal nameSection">
          <span className="name">{selectedDoctor.name}</span>
          <span className="checklist">Checklist</span>
        </div>

        <div className="horizontal ratingSection">
          {selectedDoctor.rating}{" "}
          <Rating
            style={{ maxWidth: 100 }}
            readOnly
            value={selectedDoctor.rating}
            // onChange={setRating}
            itemStyles={myStyles}
          />
          <p>215 reviews</p>
        </div>
      </div>

      {/* <ReactEcharts
        echarts={echarts}
        option={options}
        notMerge={true}
        lazyUpdate={true}
        //theme={"theme_name"}
        // onChartReady={this.onChartReadyCallback}
        //onEvents={EventsDict}
      /> */}

      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"100px"}
      />

      <div className="aboutSection">
        <header className="heading">About</header>
        <p className="aboutText">{selectedDoctor.about}</p>
      </div>
    </div>
  );
};

export default DoctorInfo;
