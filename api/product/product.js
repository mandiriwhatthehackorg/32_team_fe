const base_url = `${apigateway}/ProductAPI/1.0/product`;

const get = (params) => {
    //API ini digunakan untuk melihat list nama produk yang tersedia di Bank Mandiri
    return {
        url: `${base_url}`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        }
    }
}

const get_creditCard = (params) => {
    //API ini digunakan untuk melihat deskripsi detail dari produk kartu kredit yang tersedia di Bank Mandiri

    return {
        url: `${base_url}/creditCard`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        }
    }
}

const get_debitCard = (params) => {
    //API ini digunakan untuk melihat deskripsi detail dari produk kartu debit yang tersedia di Bank Mandiri

    return {
        url: `${base_url}/debitCard`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        }
    }
}

const get_personalLoan = (params) => {
    //API ini digunakan untuk melihat deskripsi detail dari produk pinjaman pribadi yang tersedia di Bank Mandiri

    return {
        url: `${base_url}/personalLoan`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        }
    }
}

const get_savingAccount = (params) => {
    //API ini digunakan untuk melihat deskripsi detail dari produk tabungan yang tersedia di Bank Mandiri

    return {
        url: `${base_url}/savingAccount`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        }
    }
}

const get_timeDeposit = (params) => {
    //API ini digunakan untuk melihat deskripsi detail dari produk deposito yang tersedia di Bank Mandiri

    return {
        url: `${base_url}/timeDeposit`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        }
    }
}

export default {
    product_get: get,
    product_get_creditCard: get_creditCard,
    product_get_debitCard: get_debitCard,
    product_get_personalLoan: get_personalLoan,
    product_get_savingAccount: get_savingAccount,
    product_get_timeDeposit: get_timeDeposit
};