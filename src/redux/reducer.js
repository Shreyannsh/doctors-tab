const initialState = {
  selectedDoctor: 1,
  productList: [],
  checkBoxValues: [],
  price: "500",
  searchedText: "",
  rating: "",

  doctorsList: [
    {
      id: 1,
      name: "Dr. Smith",
      price: 1500,
      rating: 3.5,
      expertise: [
        ["expertise", "value"],
        ["Cardiology", 33],
        ["Neurology", 33],
      ],
      bookings: "",
      profilePicture:
        "https://media.istockphoto.com/id/1293904378/photo/female-doctor-stock-photo.jpg?s=1024x1024&w=is&k=20&c=ufTqlQQwHgHtweancNrmW_E01EUxMUCgjmrf5MXytFA=",
      about:
        "Dr. Smith is a highly experienced cardiologist and neurologist with over 15 years of practice. ",
    },
    {
      id: 2,
      name: "Dr. Johnson",
      price: 1000,
      rating: 4.0,
      expertise: [
        ["expertise", "value"],
        ["Orthopedics", 50],
        ["Dermatology", 50],
      ],
      bookings: "",
      profilePicture:
        "https://media.istockphoto.com/id/1293904378/photo/female-doctor-stock-photo.jpg?s=1024x1024&w=is&k=20&c=ufTqlQQwHgHtweancNrmW_E01EUxMUCgjmrf5MXytFA=",
      about:
        "Dr. Johnson is a renowned orthopedic surgeon and dermatologist known for his expertise in treating musculoskeletal injuries and skin conditions. ",
    },
    {
      id: 3,
      name: "Dr. Williams",
      price: 2000,
      rating: 5.0,
      expertise: [
        ["expertise", "value"],
        ["Gynecology", 40],
        ["Pediatrics", 30],
        ["Endocrinology", 30],
      ],
      bookings: "",
      profilePicture:
        "https://media.istockphoto.com/id/1293904378/photo/female-doctor-stock-photo.jpg?s=1024x1024&w=is&k=20&c=ufTqlQQwHgHtweancNrmW_E01EUxMUCgjmrf5MXytFA=",
      about:
        "Dr. Williams is a highly respected gynecologist, pediatrician, and endocrinologist dedicated to providing comprehensive care to women and children. ",
    },
  ],
};

export const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "selectedDoctor":
      console.log(action.payload);
      return { ...state, selectedDoctor: action.payload };

    case "addBooking":
      const bookingAdded = state.doctorsList.map((doctor) =>
        doctor.id === state.selectedDoctor
          ? { ...doctor, bookings: action.booking }
          : doctor
      );
      console.log(action);
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
