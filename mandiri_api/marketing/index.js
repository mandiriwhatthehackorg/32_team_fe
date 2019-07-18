const period = require(`./period`)
const promotion = require(`./promotion`)
const value = require(`./value`)

export default {
    ...period,
    ...promotion,
    ...value
};