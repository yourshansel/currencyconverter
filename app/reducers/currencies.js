import {
  CHANGE_CURRENCY_AMOUNT,
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY,
  GET_INITIAL_CONVERSION,
  CONVERSION_RESULT,
  CONVERSION_ERROR,
} from '../actions/currencies';


const initialState = {
  baseCurrency: 'USD',
  baseCurrencyName: 'United States Dollars',
  baseCurrencyFlag: require('../src/images/unitedstates.png'),
  baseCurrencyPrefix: '($)',
  quoteCurrency: 'SGD',
  quoteCurrencyName: 'Singapore Dollars',
  quoteCurrencyFlag:require('../src/images/singapore.png'),
  quoteCurrencyPrefix: '($)',
  amount: 100,
  conversions: {},
  error: null,
};

const setConversions = (state, action) => {
  let conversion = {
    isFetching: true,
    date: '',
    rates: {},
  };

  if (state.conversions[action.currency]) {
    conversion = state.conversions[action.currency];
  }

  return {
    ...state.conversions,
    [action.currency]: conversion,
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY_AMOUNT:
      return { ...state, amount: action.amount || 0 };
    case SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        baseCurrencyName: state.quoteCurrencyName,
        baseCurrencyFlag: state.quoteCurrencyFlag,
        baseCurrencyPrefix: state.quoteCurrencyPrefix,
        quoteCurrency: state.baseCurrency,
        quoteCurrencyName: state.baseCurrencyName,
        quoteCurrencyFlag: state.baseCurrencyFlag,
        quoteCurrencyPrefix: state.baseCurrencyPrefix,
      };
    case CHANGE_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: action.currency,
        conversions: setConversions(state, action),
        baseCurrencyName: action.name,
        baseCurrencyFlag: action.countryflag,
        baseCurrencyPrefix: action.prefix,
      };
    case CHANGE_QUOTE_CURRENCY:
      return {
        ...state,
        quoteCurrency: action.currency,
        quoteCurrencyName: action.name,
        quoteCurrencyFlag: action.countryflag,
        quoteCurrencyPrefix: action.prefix,
      };
    case GET_INITIAL_CONVERSION:
      return { ...state, conversions: setConversions(state, { currency: state.baseCurrency }) };
    case CONVERSION_RESULT:
      return {
        ...state,
        baseCurrency: action.result.base,
        conversions: {
          ...state.conversions,
          [action.result.base]: {
            isFetching: false,
            ...action.result,
          },
        },
      };
    case CONVERSION_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
