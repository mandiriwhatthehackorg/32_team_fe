const post = (params) => {
    //API ini digunakan untuk mendapatkan akses code (JWT) sehingga akun tersebut dapat menggunakan API tersebut.  
    return {
        url: `${apioob}/login`,
        method: `POST`,
        header: {
            "CONTENT-TYPE": application / json
        },
        request: {
            ...params.body
            // `username`: `userHackaton`,
            // `password`: `passwordHackaton`
        }
    }
}

export default {
    login_post: post,
};