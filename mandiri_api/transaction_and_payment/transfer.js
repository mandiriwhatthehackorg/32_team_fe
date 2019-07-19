import { apigateway } from '../../api';

const base_url = `${apigateway}/TrxAndPaymentAPI/1.0/transfer`;
const post = (params) => {
    ////Transfer internal online - Menerima dan memproses permintaan terkait transfer dana antar rekening dalam bank yang sama
    return {
        url: `${base_url}`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            "Request": {
                ...params.body
                // `transactionID`: `00000011`,
                // `transactionDate`: `2018-09-10`,
                // `referenceID`: `Order/2018/001`,
                // `sourceAccountNumber`: `1150006399259`,
                // `beneficiaryAccountNumber`: `020601000019306`,
                // `amount`: `1000000000`,
                // `currency`: `IDR`,
                // `sourceAccountCustType`: `1`,
                // `beneficiaryCustType`: `1`,
                // `remark1`: `Test RTGS 1`,
                // `remark2`: `BIAYA KLIRING1`
            }
        },
        process: (data, callback) =>{
            
        }
    }
}

const post_prima = (params) => {
    // Menerima dan memproses permintaan terkait dengan transaksi transfer dana antar rekening di berbagai bank yang diinisiasi oleh Mandiri Online atau aplikasi ketiga menggunakan Prima Gateway
    return {
        url: `${base_url}/prima`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            "Request": {
                ...params.body
                // `transactionID`: `00000011`,
                // `transactionDate`: `2018-11-16+07:00`,
                // `referenceID`: `2018111626942639`,
                // `creditAccount`: `1010101010`,
                // `sourceAccountNumber`: `1150006390472`,
                // `sourceBankCode`: `008`,
                // `sourceName`: `LUKMAN SIT BIASA`,
                // `beneficiaryAccountNumber`: `020601000019306`,
                // `beneficiaryBankCode`: `045`,
                // `beneficiaryName`: `Test FRMS Mandol`,
                // `amount`: `14008`,
                // `currency`: `IDR`,
                // `remark1`: `Test RTGS 1`,
                // `remark2`: `BIAYA KLIRING1`
            }
        },
        process: (data, callback) =>{
            
        }
    }
}

const post_rtgs = (params) => {
    // Menerima dan memproses permintaan terkait dengan transaksi transfer dana antar rekening di berbagai bank yang diinisiasi oleh Mandiri Online atau aplikasi ketiga menggunakan RTGS
    return {
        url: `${base_url}/rtgs`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            "Request": {
                ...params.body
                // `transactionID`: `00000011`,
                // `transactionDate`: `2018-09-10`,
                // `referenceID`: `Order/2018/001`,
                // `sourceAccountNumber`: `1150006399259`,
                // `beneficiaryAccountNumber`: `020601000019306`,
                // `beneficiaryBankCode`: `BRINIDJA`,
                // `beneficiaryName`: `JEFRY D MANTRI`,
                // `amount`: `1000000000`,
                // `currency`: `IDR`,
                // `beneficiaryCustType`: `1`,
                // `beneficiaryCustResidence`: `1`,
                // `remark1`: `Test RTGS 1`,
                // `remark2`: `BIAYA KLIRING1`
            }
        },
        process: (data, callback) =>{
            
        }
    }
}

const post_skn = (params) => {
    // Menerima dan memproses permintaan terkait dengan transaksi transfer dana antar rekening di berbagai bank yang diinisiasi oleh Mandiri Online atau aplikasi ketiga menggunakan SKN
    return {
        url: `${base_url}/skn`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            "Request": {
                ...params.body
                // `transactionID`: `00000011`,
                // `transactionDate`: `2018-09-10`,
                // `referenceID`: `Order/2018/001`,
                // `sourceAccountNumber`: `1150006399259`,
                // `beneficiaryAccountNumber`: `020601000019306`,
                // `beneficiaryBankCode`: `BRINIDJA`,
                // `beneficiaryName`: `JEFRY D MANTRI`,
                // `amount`: `1000000000`,
                // `currency`: `IDR`,
                // `beneficiaryCustType`: `1`,
                // `beneficiaryCustResidence`: `1`,
                // `remark1`: `Test SKN 1`,
                // `remark2`: `BIAYA KLIRING1`
            }
        },
        process: (data, callback) =>{
            
        }
    }
}

export default {
    transfer_post: post,
    transfer_post_prima: post_prima,
    transfer_post_rtgs: post_rtgs,
    transfer_post_skn: post_skn
};