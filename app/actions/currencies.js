export const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT';
export const SWAP_CURRENCY = 'SWAP_CURRENCY';
export const CHANGE_BASE_CURRENCY = 'CHANGE_BASE_CURRENCY';
export const CHANGE_QUOTE_CURRENCY = 'CHANGE_QUOTE_CURRENCY';
export const GET_INITIAL_CONVERSION = 'GET_INITIAL_CONVERSION';

export const CONVERSION_RESULT = 'CONVERSION_RESULT';
export const CONVERSION_ERROR = 'CONVERSION_ERROR';

export const getInitialConversion = () => ({
  type: GET_INITIAL_CONVERSION,
});

export const changeCurrencyAmount = amount => ({
  type: CHANGE_CURRENCY_AMOUNT,
  amount: parseFloat(amount),
});

export const swapCurrency = (countryflag, currency, name, prefix) => ({
  type: SWAP_CURRENCY,
  countryflag,
  currency,
  name,
  prefix,
});

export const changeBaseCurrency = (countryflag, currency, name, prefix) => ({
  type: CHANGE_BASE_CURRENCY,
  countryflag,
  currency,
  name,
  prefix,
});

export const changeQuoteCurrency = (countryflag, currency, name, prefix) => ({
  type: CHANGE_QUOTE_CURRENCY,
  countryflag,
  currency,
  name,
  prefix,
});
