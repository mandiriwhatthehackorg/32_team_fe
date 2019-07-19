import { apigateway } from '../../api';
const base_url = `${apigateway}/CustomerExpAPI/1.0`;

const post = (params) => {
    //API ini digunakan untuk mendaftarkan keluhan pelanggan yang ada ke produk atau layanan perbankan terkait.  
    return {
        url: `${base_url}/complaint`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            Request: {
                ...params.body
                // "contactId": `99862534`,
                // "type": `1`,
                // "origin": `PHONE`,
                // "subject": `bill payment failed`,
                // "reason": `such as instruction not clear`,
                // "priority": `2`, 
                // "status": `OPEN`,
                // "ownerId": `5756098678095872`,
                // "parentId": `882234456773456`,
                // "accountId": `239767562`,
                // "description": `Hello I was paying phone bill to the provider yesterday.my money was deducted but my phone service still being blocked. Please  help me`,
                // "IsEscalated": `false`,
                // "suppliedName": `Silvia`,
                // "suppliedEmail": `silvia@cs.bankmandiri.co.id`,
                // "suppliedPhone": `08125567843`,
                // "suppliedCompany": `PT. CS sevices`,
                // "ccEmails": [
                //     "tester@gmail.com"
                // ]
            }
        },
        process: (data, callback) =>{
            
        }
    }
}

const get = (params) => {
    //API ini digunakan untuk mengambil informasi pertanyaan dari pelanggan yang terkait dengan layanan bank pada produk perbankan sesuai ticket ID
    return {
        url: `${base_url}/complaint/${params.ticketId}`,
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
    complaint_post: post,
    complaint_get: get
};