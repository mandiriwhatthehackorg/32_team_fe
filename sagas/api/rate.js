import axios from 'axios';
import { LATEST_CURRENCY_RATE } from '../../api';

function* getLatestRate(base) {
    let value = {};
    yield axios
        .get(`${LATEST_CURRENCY_RATE}?base=${base}`)
        .then(response => {
            if(response.data){
                const currencies = []
                const data = response.data.rates;
                Object.keys(data).forEach(function(key) {
                    currencies.push({
                        value: key,
                        label: key
                    })
                })
                value = {
                    latestRates: data,
                    currenciesList: currencies
                };
            }else{
                value = false;    
            }
        })
        .catch(error => {
            console.log(error);
            value = false;
        });

    return value;
}

export default {
    getLatestRate
};
