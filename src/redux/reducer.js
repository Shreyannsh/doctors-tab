const initialState = {
  doctorsList: [
    {
      name: "Dr. Smith",
      consultFee: 1500,
      rating: 85,
      expertise: [
        { name: "Cardiology", percentage: 33 },
        { name: "Neurology", percentage: 33 },
      ],
      bookings: [],
      profilePicture:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2F764556474235796928%2F&psig=AOvVaw2nSNNaSdUPhEIXbo_xkgQv&ust=1711299711415000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDtj67uioUDFQAAAAAdAAAAABAE",
    },
    {
      name: "Dr. Johnson",
      consultFee: 1600,
      rating: 78,
      expertise: [
        { name: "Orthopedics", percentage: 50 },
        { name: "Dermatology", percentage: 50 },
      ],
      bookings: [],
      profilePicture:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2F764556474235796928%2F&psig=AOvVaw2nSNNaSdUPhEIXbo_xkgQv&ust=1711299711415000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDtj67uioUDFQAAAAAdAAAAABAE",
    },
    {
      name: "Dr. Williams",
      consultFee: 1500,
      rating: 92,
      expertise: [
        { name: "Gynecology", percentage: 40 },
        { name: "Pediatrics", percentage: 30 },
        { name: "Endocrinology", percentage: 30 },
      ],
      bookings: [],
      profilePicture:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2F764556474235796928%2F&psig=AOvVaw2nSNNaSdUPhEIXbo_xkgQv&ust=1711299711415000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDtj67uioUDFQAAAAAdAAAAABAE",
    },
    // Add more doctor objects as needed
  ],
};

export const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
