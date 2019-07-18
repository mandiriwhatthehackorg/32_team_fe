
//Role client digunakan oleh calon nasabah yang akan melakukan pembukaan rekening. Alur pembukaan rekening dapat dilihat pada gambar berikut. Proses initiate, create session, dan resend OTP tidak memerlukan autentikasi keamanan, namun proses lainnya memerlukan autentikasi keamanan dalam bentuk token (JWT).

const post_initiate_session = (params) => {
    //API ini digunakan untuk memulai sesi pembukaan rekening. Data-data yang digunakan dalam API ini adalah email, NIK, phone, tanggal lahir. Jika NIK yang akan digunakan sudah memiliki session tersimpan pada basis data maka NIK tidak dapat digunakan untuk melakukan inititate session. Response yang diberikan adalah berupa json yang berisi token yang harus digunakan ketika melakukan validasi OTP.

    return {
        url: `${apioob}/initiate/createSession`,
        method: `POST`,
        header: {
            "CONTENT-TYPE": application / json
        },
        request: {
            ...params.body
            // `email`: `email@domain.com`,
            // `nik`: `<nik>`,
            // `phone`: `<phone>`,
            // `ttl`: `yyyy-mm-dd`
        }
    }
}

const post_resend_otp = (params) => {
    //API ini digunakan untuk melakukan pengiriman ulang OTP jika pada suatu kasus calon nasabah tidak menerima email OTP. API ini memberikan respon yaitu json yang mencantumkan token yang harus digunakan untuk melakukan validasi.

    return {
        url: `${apioob}/initiate/resendOTP`,
        method: `POST`,
        header: {
            "CONTENT-TYPE": application / json
        },
        request: {
            ...params.body
            // `nik`: `<nik>`
        }
    }
}

const post_validate = (params) => {
    //API ini digunakan untuk memvalidasi OTP yang diterima melalui email. Token yang didapatkan dari response API Create Session atau Resend OTP harus digunakan untuk menggunakan API ini. Token yang didapatkan dari respon API ini harus digunakan oleh API pada proses selanjutnya.

    return {
        url: `${apioob}/initiate/validateOTP`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            ...params.body
            // `otp`: `<OTP from email>`
        }
    }
}

const post_submit_data = (params) => {
    //API ini digunakan untuk mengirimkan data mengenai produk tabungan, produk kartu, cabang pengelola, dan data mengenai ibu kandung ke dalam basis data. Token  yang  didapatkan  dari  respon  API  pada  proses  sebelumnya  harus digunakan sebagai autorisasi penggunaan API ini. Token yang didapatkan dari respon API ini harus digunakan pada API proses selanjutnya.

    return {
        url: `${apioob}/submitData`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            ...params.body
            // `productType`: `<product code>`,
            // `cardType`: `<card code>`,
            // `motherName`: `<mother name>`,
            // `branchCode`: `<branch code>`
        }
    }
}

const post_submit_ktp_image = (params) => {
    //API ini digunakan untuk melakukan submit image KTP ke dalam basis data. Token dari respon API proses sebelumnya harus digunakan agar API ini dapat digunakan. Token yang terdapat dalam respon API ini harus digunakan untuk API pada proses selanjutnya.

    return {
        url: `${apioob}/submitImageKTP`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            ...params.body
            // file: `<file>`
        }
    }
}

const post_submit_selfie_image = (params) => {
    //API ini digunakan untuk melakukan submit image Selfie ke dalam basis data. Token dari respon API proses sebelumnya harus digunakan agar API ini dapat digunakan. Token yang terdapat dalam respon API ini harus digunakan untuk API pada proses selanjutnya.

    return {
        url: `${apioob}/submitImageSelfie`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            ...params.body
            // file: `<file>`
        }
    }
}

const post_submit_signature_image = (params) => {
    //API ini digunakan untuk melakukan submit image Signature ke dalam basis data. Token dari respon API proses sebelumnya harus digunakan agar API ini dapat digunakan. Token yang terdapat dalam respon API ini harus digunakan untuk API pada proses selanjutnya.

    return {
        url: `${apioob}/submitImageSignature`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            ...params.body
            // file: `<file>`
        }
    }
}

const post_do_dky = (params) => {
    //API ini digunakan untuk melakukan proses KYC. Token dari respon API proses sebelumnya harus digunakan agar API ini dapat digunakan. Token yang terdapat dalam respon API ini harus digunakan untuk API pada proses selanjutnya.

    return {
        url: `${apioob}/KYC`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            ...params.body
            // `callReff`: `tQzqr`
        }
    }
}

const post_create_account = (params) => {
    //API ini digunakan untuk melakukan pembuatan rekening, debit card, dan CIF. Token yang didapatkan dari API proses sebelumnya menyimpan informasi mengenai  session_id  dan  lain-lain  sehingga  API  ini  tidak  memerlukan inputan/request khusus.

    return {
        url: `${apioob}/createAccount`,
        method: `POST`,
        header: {
            token: params.bearer_token,
        },
        request: {
            ...params.body
        }
    }
}

export default {
    client_post_initiate_session: post_initiate_session,
    client_post_resend_otp: post_resend_otp,
    client_post_validate: post_validate,
    client_post_submit_data: post_submit_data,
    client_post_submit_ktp_image: post_submit_ktp_image,
    client_post_submit_selfie_image: post_submit_selfie_image,
    client_post_submit_signature_image: post_submit_signature_image,
    client_post_do_dky: post_do_dky,
    client_post_create_account: post_create_account
};