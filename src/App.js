import logo from "./logo.svg";
import "./App.css";
import BookDate from "./components/bookDate/bookDate";
import DoctorInfo from "./components/doctorInfo/doctorInfo";
import DoctorList from "./components/doctorsList/doctorsList";

function App() {
  return (
    <div className="App">
      <DoctorInfo />
      <DoctorList />
      <BookDate />
    </div>
  );
}

export default App;
