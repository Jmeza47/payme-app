export const moneyFormatter = (amount: number) => {
  return `L.${amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};
