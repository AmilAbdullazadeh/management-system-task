const padTo2Digits = (num: number) => {
  return num.toString().padStart(2, '0');
};

export const formatDate = (date: any) => {
  return (
    [
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
      date.getFullYear(),
    ].join('-')
  );
};
