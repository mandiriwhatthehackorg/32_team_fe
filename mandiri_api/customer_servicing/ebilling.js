import { apigateway } from '../../api';
const post = (params) => {
    //API ini digunakan untuk melakukan registrasi dan unregistrasi pada layanan e-billing

    return {
        url: `${apigateway}/ServicingAPI/1.0/customer/ebilling/${params.accountNumber}`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        query: {
            action: ``
        },
        request: {
            "Request": {
                ...params.body
                // // #1
                // `creditCardNumber`: `4259450300362552`,
                // `customerName`: `LI000024001444298  000024001444298A.MD.`,
                // `emailAddress`: `agungjulia18@gmail.com`,
                // // #2
                // `id`: `9542762645005`
            }
        },
        process: (data, callback) =>{
            
        }
    }
}

export default {
    ebilling_post: post
};