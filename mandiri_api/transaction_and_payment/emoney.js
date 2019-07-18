const base_url = `${apigateway}/TrxAndPaymentAPI/1.0/emoney`;
//Menerima dan memproses permintaan yang terkait dengan pembaharuan saldo emoney menggunakan saluran Mandiri e-channel dan pihak ketiga pada pelanggan melalui bank

//NFC
const get = (params) => {
    return {
        url: `${base_url}/emoney/${params.cardNumber}`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        }
    }
}

//Non-NFC
const post = (params) => {
    return {
        url: `${base_url}/emoney/${params.cardNumber}`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            "Request": {
                ...params.body
                // `amount`: `1000200`,
                // `debitAccount`: `60000345094`
            }
        }
    }
}

//Menerima dan memproses permintaan yang terkait dengan pembaharuan saldo Link Aja menggunakan saluran Mandiri e-channel dan pihak ketiga pada pelanggan melalui bank

const get_linkaja = (params) => {
    return {
        url: `${base_url}/linkaja/${params.customerId}`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        }
    }
}

const post_linkaja = (params) => {
    return {
        url: `${base_url}/linkaja/${params.customerId}`,
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
                // `paymentAmount`: `21000`
            }
        }
    }
}

//Menerima dan memproses permintaan yang terkait dengan pembaharuan saldo Gopay menggunakan saluran Mandiri e-channel dan pihak ketiga pada pelanggan melalui bank Status/saldo

const get_gopay = (params) => {
    return {
        url: `${base_url}/gopay/${params.customerId}`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        }
    }
}

const post_gopay = (params) => {
    return {
        url: `${base_url}/gopay/${params.customerId}`,
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
                // `paymentAmount`: `21000`
            }
        }
    }
}

//Menerima  dan  memproses  permintaan yang terkait dengan memperbarui saldo OVO menggunakan saluran Mandiri e-channel dan pihak ketiga pada pelanggan melalui bank

const get_ovo = (params) => {
    return {
        url: `${base_url}/ovo/${params.customerId}`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        }
    }
}

const post_ovo = (params) => {
    return {
        url: `${base_url}/ovo/${params.customerId}`,
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
                // `paymentAmount`: `21000`
            }
        }
    }
}

export default {
    emoney_get : get,
    emoney_post : post,
    emoney_get_linkaja : get_linkaja,
    emoney_post_linkaja : post_linkaja,
    emoney_get_gopay : get_gopay,
    emoney_post_gopay : post_gopay,
    emoney_get_ovo : get_ovo,
    emoney_post_ovo : post_ovo
};