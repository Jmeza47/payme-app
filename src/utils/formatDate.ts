export const formatDate = (date: Date | undefined): string => {
  const dayName = new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
  }).format(date); // Get the day name in Spanish
  const formattedDate = new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  }).format(date); // Format date as dd/mm/yyyy
  return `${
    dayName.charAt(0).toUpperCase() + dayName.slice(1)
  } ${formattedDate}`; // Capitalize first letter of the day
};
