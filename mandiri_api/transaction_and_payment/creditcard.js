import { apigateway } from '../../api';
const base_url = `${apigateway}/TrxAndPaymentAPI/1.0/creditcard/mandiri`;

//Menerima dan memproses permintaan terkait dengan akun kartu kredit yang diinisiasi oleh saluran mandiri atau aplikasi pihak ketiga

const get = (params) => {
    return {
        url: `${base_url}/${params.ccNumber}`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}

const post = (params) => {
    return {
        url: `${base_url}/${params.ccNumber}`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            "Request": {
                ...params.body
                // //#1
                // `debitAccount`: `CIF21000105310`,
                // `amount`: `322500`,
                // `debitCurrency`: `IDR`,
                // `creditCurrency`: `IDR`
            }
        },
        process: (data, callback) =>{
            
        }
    }
}

export default {
    creditcard_get : get,
    creditcard_post : post
};