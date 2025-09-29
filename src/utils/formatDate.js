export const formatDate = (dateValue, short = false) => {
  const currentDate = new Date();
  const date = new Date(dateValue);

  const dateOptions = {
    weekday: short ? "short" : "long",
    month: short ? "short" : "long",
    day: "numeric",
  };

  if (currentDate.toDateString() === date.toDateString()) {
    return `сегодня, ${date.toLocaleString("ru-RU", {
      month: short ? "short" : "long",
      day: "numeric",
    })}`;
  }

  const res = date.toLocaleString("ru-RU", dateOptions);

  return res === "Invalid Date" ? dateValue : res;
};
