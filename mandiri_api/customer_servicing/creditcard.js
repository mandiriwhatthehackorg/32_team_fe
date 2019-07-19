import { apigateway } from '../../api';
const base_url = `${apigateway}/ServicingAPI/1.0/customer/creditcard`;

const get_balance = (params) => {
    //API ini digunakan untuk melihat informasi balance nasabah kartu kredit Bank Mandiri sesuai nomor kartu kredit

    return {
        url: `${base_url}/${params.ccNumber}/balance`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}

const get_transaction = (params) => {
    //API ini digunakan untuk melihat informasi transaksi nasabah kartu kredit Bank Mandiri sesuai nomor kartu kredit, periode dan record number yang diinginkan

    return {
        url: `${base_url}/${params.ccNumber}/balance`,
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
    creditcard_get_balance: get_balance,
    creditcard_get_transaction: get_transaction
};
