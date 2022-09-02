const tokenServices = require('./token');

module.exports = {
    verifyLogin: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                error: 'Token not found.'
            });
        }
        else {
            const validateResponse = await tokenServices.decode(req.headers.token);
            console.log(validateResponse);
            if (validateResponse) {
                next();
            } else {
                return res.status(403).send({
                    error: 'Unauthorized user.'
                });
            }
        }
    }
}