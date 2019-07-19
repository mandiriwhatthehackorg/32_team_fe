import { apioob } from '../../api';
const post = (params) => {
    //API ini digunakan untuk mendaftarkan diri sebagai user yang memiliki role Admin atau agent. Data-data yang digunakan untuk melakukan pendaftaran adalah username, email, password, role (int) dimana role 1 adalah admin dan role 2 adalah agent.  
    return {
        url: `${apioob}/register`,
        method: `POST`,
        header: {
            "CONTENT-TYPE": application / json
        },
        request: {
            ...params.body
            // `email`: `myemail@bankmandiri.co.id`,
            // `username`: `hackatonUser`,
            // `password`: `passwordHackatonUser123!`,
            // `role`: 1
        },
        process: (data, callback) =>{
            
        }
    }
}

export default {
    register_post: post
};