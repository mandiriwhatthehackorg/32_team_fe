

const post_get_kyc_data = (params) => {
    //API ini digunakan untuk menarik data dari basis data menggunakan callReff sebagai kunci pencarian. callReff ini didapatkan setelah calon nasabah melakukan kegiatan KYC.

    return {
        url: `${apioob}/getKYCData`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            ...params.body
            // "callReff": `tQzqr`
        }
    }
}

const post_submit_kyc_result = (params) => {
    //API ini digunakan mengirimkan data hasil pemeriksaan (KYC) yang telah dilakukan oleh agent. Agent mengkonfirmasi apakah data-data yang dikirimkan dapat divalidasi dengan baik atau tidak.

    return {
        url: `${apioob}/SubmitKYCResult`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            ...params.body
            // "callReff": `tQzqr`,
            // "nik": `true`,
            // "nama": `true`,
            // "dob": `true`,
            // "phone": `true`,
            // "alamat": `true`,
            // "motherName": `true`,
            // "ktp": `true`,
            // "selfie": `true`,
            // "ttd": `true`,
            // "product": `true`,
            // "card": `true`,
            // "branch": `true`
        }
    }
}

export default {
    agent_post_get_kyc_data: post_get_kyc_data,
    agent_post_submit_kyc_result: post_submit_kyc_result
};