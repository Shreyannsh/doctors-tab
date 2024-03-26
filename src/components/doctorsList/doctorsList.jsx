import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import "./doctorsList.css";
import { IoSearchSharp } from "react-icons/io5";

import "../../assets/doctor.png";

import { GiHamburgerMenu } from "react-icons/gi";
import Filters from "../filterSection/filterSection";
import { useState } from "react";

const DoctorList = () => {
  const doctorsList = useSelector((state) => state.doctorsList);
  const dispatch = useDispatch();
  const [filterOption, setFilterOption] = useState(false);

  console.log(doctorsList);

  const state = useSelector((state) => state);

  const displayDoctors = () => {
    let doctors = [...doctorsList];

    if (state.checkBoxValues.length > 0) {
      doctors = [];
      const items = state.checkBoxValues.map((cbValue) =>
        doctorsList.filter((item) => {
          const expertiseList = item.expertise.map(
            (expt, index) => index > 0 && expt[0]
          );

          return expertiseList.includes(cbValue);
        })
      );

      items.forEach((array) => {
        if (!doctors.includes(...array)) doctors = [...doctors, ...array];
      });
    }

    if (state.rating.length > 0) {
      doctors = doctors.filter(
        (item) => Number(item.rating) >= Number(state.rating)
      );
    }

    if (state.searchedText.length > 0) {
      doctors = doctors.filter((item) =>
        item.name.toLowerCase().includes(state.searchedText.toLowerCase())
      );
    }

    if (state.price > 500) {
      doctors = doctors.filter(
        (item) => Number(item.price) <= Number(state.price)
      );
    }

    return doctors;
  };

  const display = displayDoctors();

  return (
    <div className="section">
      <Filters show={filterOption} />
      <header className="header">
        <GiHamburgerMenu className="menuBar" />
        <p className="username">
          Hello, <b>John Zairal</b>
        </p>
        <img
          className="profilePic"
          src="https://media.istockphoto.com/id/1293904378/photo/female-doctor-stock-photo.jpg?s=1024x1024&w=is&k=20&c=ufTqlQQwHgHtweancNrmW_E01EUxMUCgjmrf5MXytFA="
          alt="profile pic"
        />
      </header>
      <div className="searchSection">
        <input
          type="text"
          className="searchBar"
          placeholder="Search"
          onChange={(e) =>
            dispatch({ type: "productSearch", payload: e.target.value })
          }
        />

        <IoSearchSharp className="searchIcon" />
      </div>

      <div className="section02">
        <p> Top Doctor </p>
        <span
          className="filterBtn"
          onClick={() => setFilterOption(!filterOption)}
        >
          Filters
        </span>
      </div>
      <div className="doctorsList  scrollContent">
        {display.map((doctor) => (
          <div
            key={doctor.id}
            className="doctor"
            onClick={() =>
              dispatch({ type: "selectedDoctor", payload: doctor.id })
            }
          >
            <img
              className="tabPic"
              src="https://media.istockphoto.com/id/1293904378/photo/female-doctor-stock-photo.jpg?s=1024x1024&w=is&k=20&c=ufTqlQQwHgHtweancNrmW_E01EUxMUCgjmrf5MXytFA="
            />
            <div className="docInfo">
              <p>
                <b>{doctor.name}</b>
              </p>
              <p>
                {doctor.expertise.map(
                  (expt, index) => index > 0 && `${expt[0]} `
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
