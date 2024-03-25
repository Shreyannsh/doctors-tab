const initialState = {
  selectedDoctor: 1,
  doctorsList: [
    {
      id: 1,
      name: "Dr. Smith",
      consultFee: 1500,
      rating: 3.5,
      expertise: [
        ["expertise", "value"],
        ["Cardiology", 33],
        ["Neurology", 33],
      ],
      bookings: [],
      profilePicture:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2F764556474235796928%2F&psig=AOvVaw2nSNNaSdUPhEIXbo_xkgQv&ust=1711299711415000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDtj67uioUDFQAAAAAdAAAAABAE",
      about:
        "Dr. Smith is a highly experienced cardiologist and neurologist with over 15 years of practice. He specializes in treating cardiovascular diseases and neurological disorders with a patient-centered approach.",
    },
    {
      id: 2,
      name: "Dr. Johnson",
      consultFee: 1600,
      rating: 4.0,
      expertise: [
        ["expertise", "value"],
        ["Orthopedics", 50],
        ["Dermatology", 50],
      ],
      bookings: [],
      profilePicture:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2F764556474235796928%2F&psig=AOvVaw2nSNNaSdUPhEIXbo_xkgQv&ust=1711299711415000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDtj67uioUDFQAAAAAdAAAAABAE",
      about:
        "Dr. Johnson is a renowned orthopedic surgeon and dermatologist known for his expertise in treating musculoskeletal injuries and skin conditions. With advanced training and a compassionate approach, he provides comprehensive care to his patients.",
    },
    {
      id: 3,
      name: "Dr. Williams",
      consultFee: 1500,
      rating: 5.0,
      expertise: [
        ["expertise", "value"],
        ["Gynecology", 40],
        ["Pediatrics", 30],
        ["Endocrinology", 30],
      ],
      bookings: [],
      profilePicture:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2F764556474235796928%2F&psig=AOvVaw2nSNNaSdUPhEIXbo_xkgQv&ust=1711299711415000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDtj67uioUDFQAAAAAdAAAAABAE",
      about:
        "Dr. Williams is a highly respected gynecologist, pediatrician, and endocrinologist dedicated to providing comprehensive care to women and children. With a focus on preventive health and patient education, she strives to empower her patients to lead healthy lives.",
    },
  ],
};

export const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "selectedDoctor":
      console.log("hi");
      return { ...state, selectedDoctor: action.payload };
    default:
      return state;
  }
};
