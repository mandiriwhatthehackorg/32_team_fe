const casa = require(`./casa`)
const creditcard = require(`./creditcard`)
const customer = require(`./customer`)
const ebilling = require(`./ebilling`)
const loan = require(`./loan`)

export default {
    ...casa,
    ...creditcard,
    ...customer,
    ...ebilling,
    ...loan
};