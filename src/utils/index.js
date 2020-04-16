export const roundUp = (a, b) => Math.round(((a * 100) / b) * 100) / 100;

export const formatDate = date => {
  const dt = new Date(date);
  return `${(dt.getMonth() + 1).toString().padStart(2, "0")}/${dt
    .getDate()
    .toString()
    .padStart(2, "0")}/${dt
    .getFullYear()
    .toString()
    .padStart(4, "0")} ${dt
    .getHours()
    .toString()
    .padStart(2, "0")}:${dt
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${dt
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;
};

export const createData = (title, total, percent = "") => {
  return { title, total, percent };
};
