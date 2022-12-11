export const getUserList = async (dispatch) => {
  const res = fetch(
    "https://dummyjson.com/users?limit=100&skip=0&select=firstName,lastName,email,image"
  );
  res
    .then((res) => res.json())
    .then((res) =>
      dispatch({
        type: "GET_USER_DATA",
        payload: res.users,
        isLoading: false,
        error: null,
      })
    );
};
