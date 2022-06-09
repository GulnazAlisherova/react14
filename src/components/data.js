export const ExchangeRates = {
  USDKGS: 89,
  EURKGS: 100,
}

export const getExchangeRate = (pair) => {
  return ExchangeRates( pair );
}