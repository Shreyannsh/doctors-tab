import { doctorsList } from "../doctorData";

const initialState = {
  selectedDoctor: 1,
  productList: [],
  checkBoxValues: [],
  price: "500",
  searchedText: "",
  rating: "",
  doctorsList: doctorsList,
};

export const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "selectedDoctor":
      return { ...state, selectedDoctor: action.payload };

    case "addBooking":
      const bookingAdded = state.doctorsList.map((doctor) =>
        doctor.id === state.selectedDoctor
          ? { ...doctor, bookings: action.booking }
          : doctor
      );

      return { ...state, doctorsList: bookingAdded };

    //filter mechanism

    case "productSearch": {
      return {
        ...state,
        searchedText: action.payload,
      };
    }

    case "filterByPrice": {
      return {
        ...state,
        price: action.payload,
      };
    }

    case "filterByRating": {
      return {
        ...state,
        rating: action.payload,
      };
    }

    case "filterBySort": {
      return {
        ...state,
        sort: action.payload,
      };
    }

    case "checkBoxValue": {
      return {
        ...state,
        checkBoxValues: action.payload.target.checked
          ? [...state.checkBoxValues, action.payload.target.value]
          : state.checkBoxValues.filter(
              (cbv) => cbv !== action.payload.target.value
            ),
      };
    }

    case "setSingleCategory": {
      return {
        ...state,
        price: "500",
        searchedText: "",
        rating: "",
        sort: "",
        checkBoxValues: [action.payload],
      };
    }

    case "clearFilter": {
      return {
        ...state,
        price: "500",
        searchedText: "",
        rating: "",
        sort: "",
        checkBoxValues: [],
      };
    }
    default:
      return state;
  }
};
