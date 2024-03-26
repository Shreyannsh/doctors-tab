import "../../App.css";
import "./doctorInfo.css";

import "@smastrom/react-rating/style.css";
import { useSelector } from "react-redux";
import { Chart } from "react-google-charts";
import { Rating, Star } from "@smastrom/react-rating";

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
            itemStyles={myStyles}
          />
          <p>215 reviews</p>
        </div>
      </div>

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
