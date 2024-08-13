module.exports = (app) => {
    const webhookController = require('../controllers/webhookController')
    
    app.route('/api/v1/webhook').post(webhookController.stripe_webhook)
}