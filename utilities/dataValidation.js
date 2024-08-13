const Joi = require("joi")

const createQrPaymentSchema = Joi.object({
    amount: Joi.number().required(),
    referenceNo: Joi.string().min(10).max(30).required(),
    shopName: Joi.string().min(6).max(30).required()
})

const findPaymentIntent = Joi.object({
    paymentIntentId: Joi.string().required()
})

module.exports = { createQrPaymentSchema, findPaymentIntent }