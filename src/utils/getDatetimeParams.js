export const getDatetimeParams = () => {
  const MINIMIM_WAITING_TIME_MS = 5400000; // 1 час 30 минут
  const MAXIMUM_POSSIBLE_DATE_MS = 605000000; // неделя

  const date = new Date();
  const currentDate = date.toISOString().split("T")[0];
  const minWaitingTime = new Date(date.getTime() + MINIMIM_WAITING_TIME_MS);
  const maxDate = new Date(date.getTime() + MAXIMUM_POSSIBLE_DATE_MS)
    .toISOString()
    .split("T")[0];

  return {
    currentDate: currentDate,
    minWaitingTime: `${minWaitingTime.getHours()}:${minWaitingTime.getMinutes()}`,
    maxDate: maxDate,
  };
};
