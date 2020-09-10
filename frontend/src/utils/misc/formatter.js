export const formatCurrency = (amount, decimals) => {
    return new Intl.NumberFormat("de-DE").format(amount + decimals);
};