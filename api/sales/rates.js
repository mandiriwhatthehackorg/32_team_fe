const base_url = `${apigateway}/SalesAPI/1.0`;

const get = (params) => {
    //Berikan informasi mengenai rate FX

    return {
        url: `${base_url}/rates`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        }
    }
}

const get_detail = (params) => {
    //Berikan informasi penawaran untuk produk tabungan valas

    return {
        url: `${base_url}/rates/${params.currency}`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        }
    }
}

export default {
    rates_get: get,
    rates_get_detail: get_detail
};