import axios from 'axios';

function* getMandiri(data) {
    let value = {};
    yield axios
        .get(data.api.url, data.api.header) 
        .then(response => {
            if(response.data){ 
                value = response.data;
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

function* postMandiri(data) {
    let value = {};
    yield axios
        .post(data.api.url, data.body, data.api.header)
        .then(response => {
            if(response.data){
                value = response.data;
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
    getMandiri,
    postMandiri
};
