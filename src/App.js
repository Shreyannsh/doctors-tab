import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookDate from "./components/bookDate/bookDate";
import DoctorInfo from "./components/doctorInfo/doctorInfo";
import DoctorList from "./components/doctorsList/doctorsList";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={700}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <DoctorInfo />
      <DoctorList />
      <BookDate />
    </div>
  );
}

export default App;
