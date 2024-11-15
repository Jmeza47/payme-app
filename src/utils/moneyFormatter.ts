export const moneyFormatter = (amount: number) => {
  return `L.${amount.toLocaleString("en-US")}`;
};
