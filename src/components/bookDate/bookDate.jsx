import "../../App.css";
import "./bookDate.css";

import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const BookDate = () => {
  const dispatch = useDispatch();
  const [dates, setDates] = useState([]);
  const [booking, setBooking] = useState({ date: "", time: "" });

  const selectedDoctorId = useSelector((state) => state.selectedDoctor);
  const doctorsList = useSelector((state) => state.doctorsList);

  const selectedDoctor = doctorsList.find(
    (doctor) => doctor.id === selectedDoctorId
  );

  const bookingDate = dates.map((date) => date.split(" "));

  const finalDates = bookingDate.filter(
    (date) => date[0] !== "Sat" && date[0] !== "Sun"
  );

  const handleTime = (event) => {
    setBooking({ ...booking, time: event.target.textContent });
  };

  const bookFunction = () => {
    if (booking.date === "") {
      toast.warning("Please select date");
    } else if (booking.time === "") {
      toast.warning("Please select time");
    } else {
      dispatch({ type: "addBooking", booking: booking });
      setBooking({ date: "", time: "" });
      if (selectedDoctor.bookings) {
        toast.success("Appointment updated");
      } else {
        toast.success("Appointment booked");
      }
    }
  };

  useEffect(() => {
    let newDates = [];
    let numberOfDays = 14;
    let currentDate = new Date();

    while (numberOfDays > 0) {
      newDates = [...newDates, new Date(currentDate).toDateString()];
      currentDate.setDate(currentDate.getDate() + 1);
      numberOfDays -= 1;
    }

    setDates(newDates);
  }, []);

  useEffect(() => {
    if (selectedDoctor.bookings) {
      setBooking(() => selectedDoctor.bookings);
    }
  }, [selectedDoctor.bookings]);

  return (
    <div className="section">
      <header className="heading">
        {selectedDoctor.bookings ? "Update the" : "Book an"} appointment
      </header>
      <div className="subSection01">
        <p className="subsectionHeading">Select Date</p>
        <div className="bookingList scrollContent">
          {finalDates.map((date, index) => (
            <div key={index} className="bookingDateSection">
              <div
                className={
                  selectedDoctor?.bookings?.date?.includes(date[2]) ||
                  booking?.date?.includes(date[2])
                    ? "bookingDate bookedDate"
                    : "bookingDate"
                }
                onClick={() => setBooking({ ...booking, date: date })}
              >
                <MdOutlineDateRange className="dateIcon" />
                <p>{date[0]}</p>
                <p>{date[2]}</p>
              </div>

              {index < finalDates.length - 1 && <hr></hr>}
            </div>
          ))}
        </div>
      </div>
      <div className="subSection01">
        <p className="subsectionHeading">Select Schedule Time</p>
        <div className="table">
          <table onClick={(e) => handleTime(e)}>
            <tbody>
              <tr>
                <td
                  className={
                    selectedDoctor.bookings.time === "09:00 AM" ||
                    booking.time === "09:00 AM"
                      ? "selectedTime"
                      : ""
                  }
                >
                  09:00 AM
                </td>
                <td
                  className={
                    selectedDoctor.bookings.time === "10:00 AM" ||
                    booking.time === "10:00 AM"
                      ? "selectedTime"
                      : ""
                  }
                >
                  10:00 AM
                </td>
                <td
                  className={
                    selectedDoctor.bookings.time === "11:00 AM" ||
                    booking.time === "11:00 AM"
                      ? "selectedTime"
                      : " "
                  }
                >
                  11:00 AM
                </td>
                <td
                  className={
                    selectedDoctor.bookings.time === "12:00 PM" ||
                    booking.time === "12:00 PM"
                      ? "selectedTime"
                      : ""
                  }
                >
                  12:00 PM
                </td>
              </tr>
              <tr>
                <td
                  className={
                    selectedDoctor.bookings.time === "01:00 PM" ||
                    booking.time === "01:00 PM"
                      ? "selectedTime"
                      : ""
                  }
                >
                  01:00 PM
                </td>
                <td
                  className={
                    selectedDoctor.bookings.time === "02:00 PM" ||
                    booking.time === "02:00 PM"
                      ? "selectedTime"
                      : ""
                  }
                >
                  02:00 PM
                </td>
                <td
                  className={
                    selectedDoctor.bookings.time === "03:00 PM" ||
                    booking.time === "03:00 PM"
                      ? "selectedTime"
                      : ""
                  }
                >
                  03:00 PM
                </td>
                <td
                  className={
                    selectedDoctor.bookings.time === "04:00 PM" ||
                    booking.time === "04:00 PM"
                      ? "selectedTime"
                      : ""
                  }
                >
                  04:00 PM
                </td>
              </tr>
              <tr>
                <td
                  className={
                    selectedDoctor.bookings.time === "05:00 PM" ||
                    booking.time === "05:00 PM"
                      ? "selectedTime"
                      : ""
                  }
                >
                  05:00 PM
                </td>
                <td
                  className={
                    selectedDoctor.bookings.time === "06:00 PM" ||
                    booking.time === "06:00 PM"
                      ? "selectedTime"
                      : ""
                  }
                >
                  06:00 PM
                </td>
                <td
                  className={
                    selectedDoctor.bookings.time === "07:00 PM" ||
                    booking.time === "07:00 PM"
                      ? "selectedTime"
                      : ""
                  }
                >
                  07:00 PM
                </td>
                <td
                  className={
                    selectedDoctor.bookings.time === "08:00 PM" ||
                    booking.time === "08:00 PM"
                      ? "selectedTime"
                      : ""
                  }
                >
                  08:00 PM
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <button className="bookBtn" onClick={() => bookFunction()}>
        {selectedDoctor.bookings ? "Update " : "Book "}Appointment
      </button>

      {selectedDoctor.bookings && (
        <p className="message">
          Appointment with {selectedDoctor.name} is booked for{" "}
          {selectedDoctor?.bookings?.date[2]}{" "}
          {selectedDoctor?.bookings?.date[1]}{" "}
          {selectedDoctor?.bookings?.date[3]} at{" "}
          {selectedDoctor?.bookings?.time}
        </p>
      )}
    </div>
  );
};

export default BookDate;
