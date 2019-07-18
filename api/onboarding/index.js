const admin = require(`./admin`)
const agent = require(`./agent`)
const client = require(`./client`)
const login = require(`./login`)
const register = require(`./register`)

export default {
    ...admin,
    ...agent,
    ...client,
    ...login,
    ...register
};