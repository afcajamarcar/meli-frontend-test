export const formatCurrency = (amount, decimals) => {
    return new Intl.NumberFormat("es-ES").format(amount + decimals);
};