// ** Initial State
const initialState = {
  usersList: [],
  isLoading: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_DATA":
      return {
        ...state,
        usersList: action.payload,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

export default userReducer;
