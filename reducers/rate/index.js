import {
  TYPE_SET_LATEST_RATE,
  TYPE_SET_AMOUNT,
  TYPE_ADD_TO_CURRENCIES,
  TYPE_REMOVE_TO_CURRENCIES
} from '../../actions';

const INITIAL_STATE = {
    latestRates: null,
    currenciesList:[],
    fromCurrency: "USD",
    fromCurrencyLabel: "USD - United States Dollars",
    toCurrencies:[],
    amount: 10
};

export const rate = function(state = INITIAL_STATE, action) {
    switch (action.type) {
      case TYPE_SET_LATEST_RATE:
  
        return { ...state, ...action.payload.value };
  
      case TYPE_SET_AMOUNT:

        return { ...state, amount: action.payload.value };

      case TYPE_ADD_TO_CURRENCIES: 

        return { ...state, toCurrencies: [ ...state.toCurrencies, action.payload.value] };

      case TYPE_REMOVE_TO_CURRENCIES:
          
          const parse = state.toCurrencies
          parse.splice(action.payload.value,1)

          return { ...state, toCurrencies: parse };

      default:

        return state;

    }
  };
  
  export default rate;
  