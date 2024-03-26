import "../../App.css";
import "./doctorsList.css";

import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";

import Filters from "../filterSection/filterSection";

const DoctorList = () => {
  const doctorsList = useSelector((state) => state.doctorsList);
  const selectedDoctor = useSelector((state) => state.selectedDoctor);
  const dispatch = useDispatch();
  const [filterOption, setFilterOption] = useState(false);
  const checkBoxValues = useSelector((state) => state.checkBoxValues);
  const rating = useSelector((state) => state.rating);

  const searchedText = useSelector((state) => state.searchedText);

  const price = useSelector((state) => state.price);

  const displayDoctors = () => {
    let doctors = [...doctorsList];

    if (checkBoxValues.length > 0) {
      doctors = [];
      const items = checkBoxValues.map((cbValue) =>
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

    if (rating.length > 0) {
      doctors = doctors.filter((item) => Number(item.rating) >= Number(rating));
    }

    if (searchedText.length > 0) {
      doctors = doctors.filter((item) =>
        item.name.toLowerCase().includes(searchedText.toLowerCase())
      );
    }

    if (price > 500) {
      doctors = doctors.filter((item) => Number(item.price) <= Number(price));
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
        {display.length > 0 ? (
          display.map((doctor) => (
            <div
              key={doctor.id}
              className={
                selectedDoctor === doctor.id
                  ? "doctor selectedDoctor "
                  : "doctor"
              }
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
          ))
        ) : (
          <p className="message">No doctor available</p>
        )}
      </div>
    </div>
  );
};

export default DoctorList;
