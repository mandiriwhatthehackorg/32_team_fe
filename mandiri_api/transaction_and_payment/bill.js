import { apigateway } from '../../api';
const base_url = `${apigateway}/TrxAndPaymentAPI/1.0/bill`;

const get_balance = (params) => {
    //API ini digunakan untuk melihat list produk transaksi tagihan yang ada di Bank Mandiri

    return {
        url: `${base_url}`,
        method: `PUT`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}

//API ini digunakan untuk menerima dan memproses permintaan terkait pembayaran / pencairan merchant [Axa Financial] oleh pelanggan melalui bank

const get_axafinancial = (params) => {
    return {
        url: `${base_url}/axafinancial/${params.customerId}`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}

const post_axafinancial = (params) => {
    return {
        url: `${base_url}/axafinancial/${params.customerId}`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            "Request": {
                ...params.body
                // `currency`: `IDR`,
                // `debitAccount`: `60000345094`,
                // `paymentAmount`: `218000`,
                // `billingId`: `01`,
                // `companyAccountNumber`: `9910000011297`
            }
        },
        process: (data, callback) =>{
            
        }
    }
}

//API ini digunakan untuk menerima dan memproses permintaan terkait pembayaran / pencairan merchant [education] oleh pelanggan melalui bank

const get_education = (params) => {
    return {
        url: `${base_url}/education/${params.customerId}`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}

const post_education = (params) => {
    return {
        url: `${base_url}/education/${params.customerId}`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            "Request": {
                ...params.body
                // `currency`: `IDR`,
                // `debitAccount`: `080001`,
                // `paymentAmount`: `250000`,
                // `billingId`: `01`,
                // `companyAccountNumber`: `9910000011297`
            }
        },
        process: (data, callback) =>{
            
        }
    }
}

//API ini digunakan untuk menerima dan memproses permintaan terkait pembayaran / pencairan merchant [firstmedia] oleh pelanggan melalui bank

const get_firstmedia = (params) => {
    return {
        url: `${base_url}/firstmedia/${params.customerId}`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}

const post_firstmedia = (params) => {
    return {
        url: `${base_url}/firstmedia/${params.customerId}`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            "Request": {
                ...params.body
                // `currency`: `IDR`,
                // `debitAccount`: `60000345094`,
                // `paymentAmount`: `218000`,
                // `billingId`: `01`,
                // `companyAccountNumber`: `9910000011297`
            }
        },
        process: (data, callback) =>{
            
        }
    }
}

//API ini digunakan melihat tipe produk merchant [Indosat]
const get_indosat_product = (params) => {
    return {
        url: `${base_url}/indosat`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}

// API ini digunakan untuk menerima dan memproses permintaan terkait pembayaran / pencairan merchant [Indosat] oleh pelanggan melalui bank

const get_indosat = (params) => {
    return {
        url: `${base_url}/indosat/${params.product}/${params.msisdn}`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}

const post_indosat = (params) => {
    return {
        url: `${base_url}/indosat/${params.product}/${params.msisdn}`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            "Request": {
                ...params.body
                // //#1
                // `currency`: `IDR`,
                // `debitAccount`: `60000345094`,
                // `paymentAmount`: `50000`,
                // `companyAccountNumber`: `0060007500212`,
                // //#2
                // `currency`: `IDR`,
                // `debitAccount`: `60000345094`,
                // `paymentAmount`: `321000`,
                // `billingId`: `20190501001`,
                // `companyAccountNumber`: `0060007500212`
            }
        },
        process: (data, callback) =>{
            
        }
    }
}

//API ini digunakan untuk menerima dan memproses permintaan terkait pembayaran / pencairan merchant [Kereta Api Indonesia] oleh pelanggan melalui bank

const get_kai = (params) => {
    return {
        url: `${base_url}/kai/${params.bookingCode}`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}

const post_kai = (params) => {
    return {
        url: `${base_url}/kai/${params.bookingCode}`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            "Request": {
                ...params.body
                // `currency`: `IDR`,
                // `debitAccount`: `CIF21000105310`,
                // `paymentAmount`: `322500`,
                // `billingId`: `01`,
                // `companyAccountNumber`: `9910000011297`
            }
        },
        process: (data, callback) =>{
            
        }
    }
}

// API ini digunakan untuk menerima dan memproses permintaan terkait pembayaran / pencairan merchant [PAM] oleh pelanggan melalui bank

const get_pam = (params) => {
    return {
        url: `${base_url}/pam/${params.customerId}`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}

const post_pam = (params) => {
    return {
        url: `${base_url}/pam/${params.customerId}`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            "Request": {
                ...params.body
                // `currency`: `IDR`,
                // `debitAccount`: `60000345094`,
                // `paymentAmount`: `393000`,
                // `billingId`: `201905001,201906003`,
                // `companyAccountNumber`: `222222`
            }
        },
        process: (data, callback) =>{
            
        }
    }
}

// API ini digunakan untuk menerima dan memproses permintaan terkait pembayaran / pencairan merchant [PLN] oleh pelanggan melalu bank

const get_pln = (params) => {
    return {
        url: `${base_url}/pln/customerId}`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}

const post_pln = (params) => {
    return {
        url: `${base_url}/pln/${params.customerId}`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            "Request": {
                ...params.body
                // //#1
                // `productNumber`: `123451`,
                // `currency`: `IDR`,
                // `debitAccount`: `60000345094`,
                // `paymentAmount`: `50000`,
                // `companyAccountNumber`: `60000345094`,
                // //#2
                // `currency`: `IDR`,
                // `debitAccount`: `60000345094`,
                // `paymentAmount`: `393000`,
                // `billingId`: `201905001,201906003`,
                // `companyAccountNumber`: `60000345094`
            }
        },
        process: (data, callback) =>{
            
        }
    }
}

//API ini digunakan melihat tipe produk merchant [Telkomsel]
const get_telkomsel_product = (params) => {
    return {
        url: `${base_url}/Telkomsel`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}

// API ini digunakan untuk menerima dan memproses permintaan terkait pembayaran / pencairan merchant [Telkomsel] oleh pelanggan melalui bank


const get_telkomsel = (params) => {
    return {
        url: `${base_url}/telkomsel/${params.product}/${params.msisdn}`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}

const post_telkomsel = (params) => {
    return {
        url: `${base_url}/telkomsel/${params.product}/${params.msisdn}`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            "Request": {
                ...params.body
                // //#1
                // `currency`: `IDR`,
                // `debitAccount`: `60000345094`,
                // `paymentAmount`: `51500`,
                // `companyAccountNumber`: `9910000011230`,
                // //#2
                // `currency`: `IDR`,
                // `debitAccount`: `60000345094`,
                // `paymentAmount`: `566000`,
                // `billingId`: `20190510001,20190610001`,
                // `companyAccountNumber`: `9910000011230`
            }
        },
        process: (data, callback) =>{
            
        }
    }
}

//API ini digunakan melihat tipe produk merchant [Three]
const get_three_product = (params) => {
    return {
        url: `${base_url}/tHere`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}

// API ini digunakan untuk menerima dan memproses permintaan terkait pembayaran / pencairan merchant [Three] oleh pelanggan melalui bank

const get_three = (params) => {
    return {
        url: `${base_url}/three/${params.product}/${params.msisdn}`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}

const post_three = (params) => {
    return {
        url: `${base_url}/three/${params.product}/${params.msisdn}`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            "Request": {
                ...params.body
                // `currency`: `IDR`,
                // `debitAccount`: `60000345094`,
                // `paymentAmount`: `50000`,
                // `companyAccountNumber`: `0060007500212`
            }
        },
        process: (data, callback) =>{
            
        }
    }
}

//API ini digunakan melihat tipe produk merchant [XL]
const get_xl_product = (params) => {
    return {
        url: `${base_url}/Xl`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}

//API ini digunakan untuk menerima dan memproses permintaan terkait pembayaran / pencairan merchant [Telkomsel] oleh pelanggan yang ada di akun mereka dengan bank - penagihan khusus

const get_xl = (params) => {
    return {
        url: `${base_url}/xl/${params.product}/${params.msisdn}`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}

const post_xl = (params) => {
    return {
        url: `${base_url}/xl/${params.product}/${params.msisdn}`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            "Request": {
                ...params.body
                // //#1
                // `currency`: `IDR`,
                // `debitAccount`: `60000345094`,
                // `paymentAmount`: `51500`,
                // `companyAccountNumber`: `9910000011230`,

                // //#2
                // `currency`: `IDR`,
                // `debitAccount`: `60000345094`,
                // `paymentAmount`: `566000`,
                // `billingId`: `20190510001,20190610001`,
                // `companyAccountNumber`: `9910000011230`

            }
        },
        process: (data, callback) =>{
            
        }
    }
}

export default {
    bill_get_balance: get_balance,
    bill_get_axafinancial: get_axafinancial,
    bill_post_axafinancial: post_axafinancial,
    bill_get_education: get_education,
    bill_post_education: post_education,
    bill_get_firstmedia: get_firstmedia,
    bill_post_firstmedia: post_firstmedia,
    bill_get_indosat: get_indosat,
    bill_get_indosat_product: get_indosat_product,
    bill_post_indosat: post_indosat,
    bill_get_kai: get_kai,
    bill_post_kai: post_kai,
    bill_get_pam: get_pam,
    bill_post_pam: post_pam,
    bill_get_pln: get_pln,
    bill_post_pln: post_pln,
    bill_get_telkomsel_product: get_telkomsel_product,
    bill_get_telkomsel: get_telkomsel,
    bill_post_telkomsel: post_telkomsel,
    bill_get_three: get_three,
    bill_get_three_product: get_three_product,
    bill_post_three: post_three,
    bill_get_xl_product: get_xl_product,
    bill_get_xl: get_xl,
    bill_post_xl: post_xl
};