export const formatDate = (date: Date, format: string) => {
  if (format === "yyyy-mm-dd") {
    return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
  }
};
