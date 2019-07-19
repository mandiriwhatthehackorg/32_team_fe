import { apioob } from '../../api';
//Digunakan untuk keperluan insert, update, delete beberapa data awalan seperti jenis kartu, jenis produk, data calon nasabah, dan cabang. Selain untuk melakukan insert, role ini dapat melakukan update dan delete juga terhadap data-data card, product, citizen, dan branch. Berikut adalah API yang dapat diakses oleh role ADMIN.

const post_branch = (params) => {
    //API	Insert  Branch  digunakan  untuk  memberikan  data  awalan  mengenai cabang-cabang yang akan digunakan dalam proses pembuatan rekening. Data-data yang  diperlukan  untuk  menambahkan  data  cabang  adalah  branchCode,branchAddress, branchName.

    return {
        url: `${apioob}/insertBranch`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            ...params.body
            // "branchCode": `76548`,
            // "branchAddress": `Kalimantan`,
            // "branchName": `Cabang Area Kalimantan`
        },
        process: (data, callback) =>{
            
        }
    }
}

const post_card = (params) => {
    //API Insert Card digunakan untuk menambahkan jenis kartu yang tersedia untuk digunakan dalam proses pembukaan rekening. Data-data yang diperlukan untuk menambahkan data produk kartu adalah cardCode, cardName.

    return {
        url: `${apioob}/insertCard`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            ...params.body
            // "cardCode": `silver`,
            // "cardName": `Mandiri Silver Reguler`
        },
        process: (data, callback) =>{
            
        }
    }
}

const post_product = (params) => {
    //API Insert Product digunakan untuk menambahkan jenis produk tabungan yang tersedia untuk digunakan dalam proses pembukaan rekening. Data-data yang diperlukan untuk menambahkan data produk tabungan adalah productCode, productName.

    return {
        url: `${apioob}/insertProduct`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            ...params.body
            // "productCode": `taspen`,
            // "productName": `Tabungan Pensiun`
        },
        process: (data, callback) =>{
            
        }
    }
}

const post_citizen = (params) => {
    //API Insert Citizen digunakan untuk menambahkan data penduduk (dukcapil) yang tersedia untuk digunakan dalam proses pembukaan rekening. Jika data penduduk tidak ada maka NIK random yang di gunakan akan mendapatkan balikan  data  default  dengan  nama  “Antonio  Banderas”  dan  tanggal  lahir “2000-12-30”, serta alamat adalah “Jakarta”.


    return {
        url: `${apioob}/insertCitizen`,
        method: `POST`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        request: {
            ...params.body
            // "nik": `1234567`,
            // "name": `Micky`,
            // "dob": `1990-10-23`,
            // "address": `Semarang Barat`
        },
        process: (data, callback) =>{
            
        }
    }
}

const get_branch = (params) => {
    //API ini digunakan untuk menarik seluruh data cabang yang dapat digunakan dalam proses pembukaan rekening.

    return {
        url: `${apioob}/getBranch`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}

const get_card = (params) => {
    //API  ini  digunakan  untuk  menarik  seluruh  data  produk  kartu  yang  dapat digunakan dalam proses pembukaan rekening.

    return {
        url: `${apioob}/getCard`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}

const get_product = (params) => {
    //API ini digunakan untuk menarik seluruh data produk tabungan yang dapat digunakan dalam proses pembukaan rekening.

    return {
        url: `${apioob}/getProduct`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}

const get_citizen = (params) => {
    //API ini digunakan untuk menarik seluruh data penduduk (dukcapil) yang berada di dalam basis data.

    return {
        url: `${apioob}/getCitizen`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}


const delete_branch = (params) => {
    //API ini digunakan untuk menghapus data cabang secara spesifik berdasarkan branch Code yang di encode di dalam url.

    return {
        url: `${apioob}/deleteBranch?branchCode=<branchcode>`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}

const delete_card = (params) => {
    //API  ini  digunakan  untuk  menghapus  data  produk  kartu  secara  spesifik berdasarkan cardCode yang di encode di dalam url.

    return {
        url: `${apioob}/deleteCard?cardCode=<cardcode>`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}

const delete_product = (params) => {
    //API ini digunakan untuk menghapus data produk tabungan secara spesifik berdasarkan productCode yang di encode di dalam url.

    return {
        url: `${apioob}/deleteProduct?productCode=<productCode>`,
        method: `GET`,
        header: {
            token: params.bearer_token,
            "CONTENT-TYPE": application / json
        },
        process: (data, callback) =>{
            
        }
    }
}

const delete_citizen = (params) => {
    //API ini digunakan untuk menghapus data penduduk (dukcapil) secara spesifik berdasarkan nik yang di encode di dalam url.

    return {
        url: `${apioob}/deleteCitizen?id=<nik>`,
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
    admin_post_branch: post_branch,
    admin_post_card: post_card,
    admin_post_product: post_product,
    admin_post_citizen: post_citizen,
    admin_get_branch: get_branch,
    admin_get_card: get_card,
    admin_get_product: get_product,
    admin_get_citizen: get_citizen,
    admin_delete_branch: delete_branch,
    admin_delete_card: delete_card,
    admin_delete_product: delete_product,
    admin_delete_citizen: delete_citizen
};