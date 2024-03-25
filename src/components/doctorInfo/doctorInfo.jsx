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
    legend: "right",
    height: 200,
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
      <h1>Profile</h1>
      <p>{selectedDoctor.name}</p>
      <div className="ratingSection">
        {selectedDoctor.rating}{" "}
        <Rating
          style={{ maxWidth: 150 }}
          readOnly
          value={selectedDoctor.rating}
          // onChange={setRating}
          itemStyles={myStyles}
        />
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
        height={"400px"}
      />

      <div>
        <p>About</p>
        {selectedDoctor.about}
      </div>

      {/* <div id="myChart" style={{ width: "100%", height: "100%" }}></div> */}
      {/* <img src="https://media.istockphoto.com/id/1293904378/photo/female-doctor-stock-photo.jpg?s=1024x1024&w=is&k=20&c=ufTqlQQwHgHtweancNrmW_E01EUxMUCgjmrf5MXytFA=" /> */}
    </div>
  );
};

export default DoctorInfo;
