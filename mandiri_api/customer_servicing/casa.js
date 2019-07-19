import { apigateway } from '../../api';
const base_url = `${apigateway}/ServicingAPI/1.0/customer/casa`;

const get = (params) => {
    //API ini digunakan untuk melihat informasi semua transaksi harian nasabah CASA Bank Mandiri sesuai account number

    return {
        url: `${base_url}/${params.accountNumber}`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}

const get_balance = (params) => {
    //API ini digunakan untuk melihat informasi balance nasabah CASA Bank Mandiri sesuai account number

    return {
        url: `${base_url}/${params.accountNumber}/balance`,
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
    //API ini digunakan untuk melihat informasi transaksi nasabah CASA Bank Mandiri sesuai account number dan periode yang diinginkan

    return {
        url: `${base_url}/${params.accountNumber}transaction`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        query: {
            endDate: ``,
            startDate: ``

        },
        process: (data, callback) =>{
            
        }
    }
}

export default {
    casa_get: get,
    casa_get_balance: get_balance,
    casa_get_transaction: get_transaction
};