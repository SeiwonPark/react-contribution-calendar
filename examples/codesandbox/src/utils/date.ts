const getRandomLevel = () => {
  return ~~(Math.random() * 5); // random integer (0 ~ 4)
};

export const generateDataInRange = (
  startDate: string | Date,
  endDate: string | Date,
) => {
  const data = [];
  const currentDate = new Date(startDate);
  endDate = new Date(endDate);

  while (currentDate <= endDate) {
    const date: { [key: string]: { level: number } } = {};
    const dateString = currentDate.toISOString().slice(0, 10);
    date[dateString] = { level: getRandomLevel() };
    data.push(date);
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return data;
};

export const getRandomDate = () => {
  const currentDate = new Date();
  const endDate = new Date(currentDate);
  const randomMonth = (Math.random() * 12) | 0; // random month index (0 ~ 11, 0: January, 11: December)
  currentDate.setMonth(currentDate.getMonth() - randomMonth);

  const randomDay = (Math.random() * 27 + 4) | 0; // random day (4 ~ 30)
  endDate.setDate(endDate.getDate() + randomDay);

  return {
    randomStartDate: currentDate.toISOString().slice(0, 10),
    randomEndDate: endDate.toISOString().slice(0, 10),
  };
};
