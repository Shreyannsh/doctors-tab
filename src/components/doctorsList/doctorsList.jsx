import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import "./doctorsList.css";

import "../../assets/doctor.png";

import { GiHamburgerMenu } from "react-icons/gi";

const DoctorList = () => {
  const doctorsList = useSelector((state) => state.doctorsList);
  const dispatch = useDispatch();

  return (
    <div className="section">
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

      <input type="text" className="searchBar" />
      <div className="section02">
        <p> Top Doctor </p>
        <p>Filter</p>
      </div>
      <div className="doctorsList">
        {doctorsList.map((doctor) => (
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
