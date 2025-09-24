export const getDatetimeParams = () => {
  const MINIMIM_WAITING_TIME_MS = 5400099; // 1 час 30 минут
  const MAXIMUM_POSSIBLE_DATE_MS = 605000000; // неделя

  const date = new Date();
  const currentDate = date.toISOString().split("T")[0];
  const minWaitingTime = new Date(date.getTime() + MINIMIM_WAITING_TIME_MS)
    .toLocaleTimeString()
    .slice(0, 5);
  const maxDate = new Date(date.getTime() + MAXIMUM_POSSIBLE_DATE_MS)
    .toISOString()
    .split("T")[0];

  return {
    currentDate: currentDate,
    minWaitingTime: minWaitingTime,
    maxDate: maxDate,
  };
};

export const validateDatetimeValues = ({ dateValue, timeValue }) => {
  const MINIMIM_WAITING_TIME_MS = 5400099; // 1 час 30 минут
  const MAXIMUM_POSSIBLE_DATE_MS = 605000000; // неделя

  let validDate;
  let validTime;

  const currentDate = new Date();
  const userSelectDate = new Date(`${dateValue} ${timeValue}`);
  const minAvailableDate = new Date(`${dateValue}, 09:00`);
  const maxAvailableDate = new Date(`${dateValue}, 22:00`);
  const currentDateString = currentDate.toISOString().split("T")[0];
  const minWaitingTime = new Date(currentDate.getTime() + MINIMIM_WAITING_TIME_MS);
  const maxDate = new Date(currentDate.getTime() + MAXIMUM_POSSIBLE_DATE_MS);

  console.log(dateValue, timeValue);
  // .toLocaleTimeString()
  // .slice(0, 5);
  // const maxDate = new Date(date.getTime() + MAXIMUM_POSSIBLE_DATE_MS)
  //   .toISOString()
  //   .split("T")[0];

  let dateValueMS = new Date(dateValue).getTime();
  let todayDateMS = currentDate.getTime();
  let maxDateMS = maxDate.getTime();
  let minWaitingTimeMS = minWaitingTime.getTime();
  let userSelectMS = userSelectDate.getTime();
  let maxAvailableMS = maxAvailableDate.getTime();
  let minAvailableMS = minAvailableDate.getTime();

  if (dateValueMS > maxDateMS) {
    validDate = maxDate.toISOString().split("T")[0];
  } else {
    validDate = userSelectDate.toISOString().split("T")[0];
  }

  if (dateValueMS === todayDateMS) {
    if (minWaitingTimeMS <= userSelectMS && userSelectMS <= maxAvailableMS) {
      validTime = timeValue;
    } else {
      validTime = minWaitingTime.toLocaleTimeString().slice(0, 5);
    }
  } else {
    if (minAvailableMS <= userSelectMS && userSelectMS <= maxAvailableMS) {
      validTime = timeValue;
    } else {
      validTime = "12:00";
    }
  }

  return {
    dateValue: currentDate,
    timeValue: minWaitingTime,
  };
};
