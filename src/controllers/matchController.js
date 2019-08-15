const Match = require('../models/Match');

module.exports = {
    async index(req, res) {
        try {
            res.status(200).send('osk')
        }catch(error) {
            throw new Error({
                message : error.message
            })
        }
    },

    async store(req, res) {
        try {
            const { devs } = req.params;

            if ( devs ) {
                const match = await Match.create({
                
                })
            }

            res.status(200).send('ok')
        }catch(error) {
            throw new Error({
                message : error.message
            })
        }
    }
}