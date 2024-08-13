const CRC = require('crc-full').CRC
module.exports = async (strData) => {
    const crc = CRC.default('CRC16_CCITT_FALSE')
    const computedCRC = crc
        .compute(Buffer.from(strData, 'ascii'))
        .toString(16)
        .toUpperCase()
    return computedCRC
}

