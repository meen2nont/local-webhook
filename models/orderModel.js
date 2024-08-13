const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utilities/database');

const Order = sequelize.define('Order', {
    orderId: { type: DataTypes.STRING(50), unique: true },
    paymentIntentId: { type: DataTypes.STRING(50), unique: true },
    userId: { type: DataTypes.STRING(50) },
    merchantId: { type: DataTypes.STRING(50) },
    billerId: { type: DataTypes.STRING(20) },
    invoiceNo: { type: DataTypes.STRING(100) },
    shopName: { type: DataTypes.STRING(50) },
    amount: { type: DataTypes.FLOAT },
    reference1: { type: DataTypes.STRING(50), unique: true },
    reference2: { type: DataTypes.STRING(50), unique: true },
    qrcode: { type: DataTypes.STRING },
    expiresAt: { type: DataTypes.DATE },
    status: { type: DataTypes.STRING(50), defaultValue: 'PENDING' },
    paymentType: { type: DataTypes.STRING(50) },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    tableName: 'orders',
    timestamps: true,
    indexes: [
        {
            fields: ['userId']
        },
        {
            fields: ['merchantId']
        },
        {
            fields: ['shopName']
        },
        {
            fields: ['status']
        },
        {
            fields: ['paymentType']
        }
    ]
})

module.exports = Order;