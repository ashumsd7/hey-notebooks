import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";


const isLoggedIn = () => {
  let isThere = true;
  console.log("isThere",isThere);
  return isThere;
};
dayjs.extend(utc);
dayjs.extend(timezone);

const logOut = () => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  localStorage.removeItem("userId");
  window.location.reload();
};




const formatErrResponse = (response, isSpecificKeys, showKeys) => {
  if (isSpecificKeys) {
    const errObj = response.error?.data?.error_list[0];
    const value = Object.values(errObj)[0];
    const key = Object.keys(errObj)[0];
    if (showKeys && key && value)
      return key.toLocaleUpperCase() + " - " + value;
    if (key && value) return value;
    return "Error: Something went wrong";
  }
  if (response && response.error.data) {
    // Extract the value of message from the error_list array at index 0
    return response?.error?.data?.error_list[0]?.message;
  } else {
    // Return a default error message if the structure doesn't match
    return "Error: Something went wrong";
  }
};








export {
  isLoggedIn,
  logOut,
  formatErrResponse,
};
