export const getDateOptionsList = () => {
  const DAY_INTERVAL_MS = 86400000; // сутки

  const dateOptionsList = [];

  const currentDateMS = new Date().getTime();
  const maxAvailableDateMS = new Date(currentDateMS + DAY_INTERVAL_MS * 7).getTime();

  for (let index = currentDateMS; index < maxAvailableDateMS; index += DAY_INTERVAL_MS) {
    const date = new Date(index);
    const clientTimeZone = Math.abs(date.getTimezoneOffset()) * 60 * 1000;
    const dateOption = new Date(index + clientTimeZone).toISOString().split("T")[0];
    dateOptionsList.push(dateOption);
  }

  return dateOptionsList;
};

export const getTimeOptionsList = (selectedDeliveryDate) => {
  const MINUTE_INTERVAL_MS = 900000; // 15 минут

  const timeOptionsList = [];

  const selectedDate = new Date(selectedDeliveryDate);
  const currentDate = new Date();
  const currentDateMS = currentDate.getTime();
  const roundedCurrentDateMS = roundTime(currentDateMS, MINUTE_INTERVAL_MS).getTime();
  let maxAvailableTimeMS = currentDate.setHours(22, 30);
  let minAvailableTimeMS;

  if (currentDate.getDate() === selectedDate.getDate()) {
    minAvailableTimeMS = roundedCurrentDateMS + 5400000;
    maxAvailableTimeMS = currentDate.setHours(22, 30);
  } else {
    minAvailableTimeMS = selectedDate.setHours(10, 30);
    maxAvailableTimeMS = selectedDate.setHours(22, 30);
  }

  for (
    let index = minAvailableTimeMS;
    index < maxAvailableTimeMS;
    index += MINUTE_INTERVAL_MS
  ) {
    const timeOptionTimeString = new Date(index).toTimeString().split(":")
    const timeOption = `${timeOptionTimeString[0]}:${timeOptionTimeString[1]}`
    timeOptionsList.push(timeOption);
  }

  return timeOptionsList;
};

function roundTime(now, interval) {
  return new Date(Math.round(new Date(now).getTime() / interval) * interval);
}
