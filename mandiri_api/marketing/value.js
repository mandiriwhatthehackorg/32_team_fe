const get = (params) => {
    //API ini digunakan untuk melihat promosi merchant yang tersedia di Bank Mandiri sesuai dengan transaction value
    return {
        url: `${apigateway}/MarketingAPI/1.0/promotion/value`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        }
    }
}

export default {
    value_get : get
};