export const formatDate = (dateValue, short = false) => {
  const date = new Date(dateValue);

  const dateOptions = {
    weekday: short ? "short" : "long",
    month: short ? "short" : "long",
    day: "numeric",
  };

  const res = date.toLocaleString("ru-RU", dateOptions);

  return res === "Invalid Date" ? dateValue : res;
};
