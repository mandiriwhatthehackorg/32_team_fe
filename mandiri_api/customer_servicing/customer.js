import { apigateway } from '../../api';
const get_customer = (params) => {
    //API ini digunakan untuk melihat informasi nasabah Bank Mandiri sesuai CIF number

    return {
        url: `${apigateway}/ServicingAPI/1.0/customer/${params.cifNumber}`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}

export default {
    customer_get_customer: get_customer
};