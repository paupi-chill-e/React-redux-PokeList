export const LogInActions = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN_PENDING",
    });

    dispatch({
      type: "LOGIN_SUCESS",
    });
  } catch (err) {
    dispatch({
      type: "LOGIN_ERROR",
    });
  }
};
