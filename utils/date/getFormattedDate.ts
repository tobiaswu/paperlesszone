export const getFormattedDate = (date: string, lang: string) => {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();

  if (lang === 'de') {
    return `${day}.${month}.${year}`;
  }
  return `${month}/${day}/${year}`;
};
