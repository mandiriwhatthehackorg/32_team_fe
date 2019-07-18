const base_url = `${apigateway}/MarketingAPI/1.0/promotion`;

const get = (params) => {
    //API ini digunakan untuk list promosi yang tersedia di Bank Mandiri
    return {
        url: `${base_url}`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        }
    }
}

const get_merchant = (params) => {
    //API ini digunakan untuk melihat semua promosi merchant yang tersedia di Bank Mandiri
    return {
        url: `${base_url}/merchant`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        }
    }
}

const get_merchant_detail = (params) => {
    //API ini digunakan untuk melihat promosi merchant yang tersedia di Bank Mandiri sesuai dengan merchant ID
    return {
        url: `${base_url}/merchant/${params.merchantId}`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        }
    }
}

export default {
    promotion_get: get,
    promotion_get_merchant: get_merchant,
    promotion_get_merchant_detail: get_merchant_detail
};
