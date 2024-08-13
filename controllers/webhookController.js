
exports.stripe_webhook = async (req, res) => {
    try {
        // Option check header basic Authorization undecrytion
        const headerAuth = req.headers.authorization.split(' ')[1]

        // Compare Authorization
        const yourAuth = 'RzNDMlFkYmN4SktEb3JtOkN4YlNJeFRySEt4cnMyMg=='
        if (headerAuth !== yourAuth) {
            const objResponse = {
                responseCode: '999',
                responseMesg: 'Authorization failed',
            }
            res.status(200).send(objResponse)
            return
        } else {
            // Receive data from API
            const objData = req.body
            console.log(objData)

            // Put the data information to use


            // Response to API
            const objResponse = {
                responseCode: '000',
                responseMesg: 'Success',
            }
            res.status(200).send(objResponse)
            return
        }


        // // Option check header basic Authorization decrytion user_name and password
        // const arrAuth = new Buffer.from(headerAuth.split(' ')[1], 'base64').toString().split(':')
        // const user_name = arrAuth[0]
        // const password = arrAuth[1]

        // console.log('arrAuth', arrAuth)
        // console.log('user_name', user_name)
        // console.log('password', password)

        // // Check user_name and password


    } catch (error) {
        console.error(error)
        const objResponse = {
            responseCode: '999',
            responseMesg: error.message,
        }
        res.status(200).send(objResponse)
    }
}
