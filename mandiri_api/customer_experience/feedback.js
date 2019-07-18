const base_url = `${apigateway}/CustomerExpAPI/1.0`;

const post = (params) => {
    //API ini digunakan untuk mendaftarkan feedback pelanggan yang ada untuk produk atau layanan perbankan terkait 
    return {
        url: `${base_url}/feedback`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            "Request": {
                ...params.body
                // "email": `yeki@yopmail.com`,
                // "eventId": `Feed001`,
                // "subject": `Bank Mandiri complaint handling Feedback`,
                // "origin": `web`,
                // "feedback": [
                //     {
                //         "title": `How fast we solve your issue?`,
                //         "type": `radio_1`,
                //         "answer": `5`
                //     },
                //     {
                //         "title": `what we can improve?`,
                //         "type": `text_1`,
                //         "answer": `you doing great`
                //     }
                // ],
                // "closingStatement": `how satisfied are you?`,
                // "closingRating": `5`
            }
        }
    }
}

const get = (params) => {
    //API ini digunakan untuk mendapatkan info feedback pelanggan yang ada untuk produk atau layanan perbankan terkait sesuai dengan ticket ID
    return {
        url: `${base_url}/feedback{ticketId}`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        }
    }
}

export default {
    feedback_post: post,
    feedback_get: get
};