
global.apigateway = `https://apigateway.mandiriwhatthehack.com/gateway`;  
global.apioob = `https://oob.mandiriwhatthehack.com/api`;  

const customer_experience = require(`./customer_experience`);
const customer_servicing = require(`./customer_servicing`);
const marketing = require(`./marketing`);
const product = require(`./product`);
const sales = require(`./sales`);
const transaction_and_payment = require(`./transaction_and_payment`);
const onboarding = require(`./onboarding`);

export default {
    customer_experience,
    customer_servicing,
    marketing,
    product,
    sales,
    transaction_and_payment,
    onboarding
};