const complaint = require(`./complaint`)
const feedback = require(`./feedback`)

export default {
    ...complaint,
    ...feedback
};