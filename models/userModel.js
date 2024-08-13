const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../utilities/database')

const User = sequelize.define('User', {
    userId: { type: DataTypes.STRING, unique: true },
    username: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, defaultValue: null },
    phoneNo: { type: DataTypes.STRING, defaultValue: null },
    userRole: { type: DataTypes.STRING, defaultValue: 'USER' },
    userStatus: { type: DataTypes.STRING, defaultValue: 'ACTIVE' },
    merchantId: { type: DataTypes.STRING, unique: true },
    secretKey: { type: DataTypes.STRING, defaultValue: null },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, {
    tableName: 'users',
    timestamps: true
})

module.exports = User