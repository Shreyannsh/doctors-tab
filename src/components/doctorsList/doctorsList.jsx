import "../../App.css";

import "../../../public/assets/doctor-profile-pic.png";

import { GiHamburgerMenu } from "react-icons/gi";

const DoctorList = () => {
  return (
    <div className="section">
      <header>
        <GiHamburgerMenu />
        <p>
          Hello, <b>John Zairal</b>
        </p>
        <img
          src="../../../public/assets/doctor-prfile-pic.png"
          alt="profile pic"
        />
      </header>
    </div>
  );
};

export default DoctorList;
