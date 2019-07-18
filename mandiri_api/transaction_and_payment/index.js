const bill = require(`./bill`)
const creditcard = require(`./creditcard`)
const emoney = require(`./emoney`)
const transfer = require(`./transfer`)

export default {
    ...bill,
    ...creditcard,
    ...emoney,
    ...transfer
};