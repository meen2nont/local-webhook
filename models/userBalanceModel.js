const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utilities/database');

const UserBalance = sequelize.define('UserBalance', {
    userId: { type: DataTypes.STRING, unique: true },
    username: { type: DataTypes.STRING, unique: true },
    merchantId: { type: DataTypes.STRING, unique: true, defaultValue: null },
    totalBalance: { type: DataTypes.FLOAT, defaultValue: 0 },
    totalDeposit: { type: DataTypes.FLOAT, defaultValue: 0 },
    totalWithdraw: { type: DataTypes.FLOAT, defaultValue: 0 },
    totalSettle: { type: DataTypes.FLOAT, defaultValue: 0 },
    settleBalance: { type: DataTypes.FLOAT, defaultValue: 0 },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    tableName: 'user_balances',
    timestamps: true
});

module.exports = UserBalance;