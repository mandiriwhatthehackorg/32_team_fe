import { apigateway } from '../../api';
const base_url = `${apigateway}/SalesAPI/1.0/fee`;

const get_mtrAccount = (params) => {
    //Berikan informasi penawaran untuk produk tabungan berjangka

    return {
        url: `${base_url}/mtrAccount`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}

const get_savingAccount = (params) => {
    //Berikan informasi penawaran untuk produk tabungan reguler

    return {
        url: `${base_url}/savingAcCount`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}

const get_tabunganValas = (params) => {
    //Berikan informasi penawaran untuk produk tabungan valas

    return {
        url: `${base_url}/tabunganValas`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}

export default {
    fee_get_mtrAccount: get_mtrAccount,
    fee_get_savingAccount: get_savingAccount,
    fee_get_tabunganValas: get_tabunganValas
};