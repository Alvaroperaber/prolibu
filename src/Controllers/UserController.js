const bcrypt = require('bcryptjs');
const db = require('../../models');
const tokenServices = require('../Middleware/token')

exports.add = async (req, res, next) => {
    try {
        const Usuario = await db.users.findOne({ where: { clientId: req.body.clientId } });
        if (Usuario) {
            res.status(409).send({
                error: 'El usuario ya existe.'
            })
        }
        else {
            req.body.clientSecretId = bcrypt.hashSync(req.body.clientSecretId, 10);
                const Usuario = await db.users.create({
                    id: 1,
                    clientId: req.body.clientId,
                    clientSecretId: req.body.clientSecretId
                });

                res.status(200).send({
                    message: 'Usuario creado con éxito.'
                });
            
        }
    } catch (error) {
        res.status(500).send({
            error: '¡Error en el servidor!'
        })
        console.log(error)
        next(error);
    }
};


exports.login = async (req, res, next) => {
    try {
        const Usuario = await db.users.findOne({ where: { clientId: req.body.clientId } });
        if (Usuario) {
            const passwordIsValid = bcrypt.compareSync(req.body.clientSecretId, Usuario.clientSecretId);
            if (passwordIsValid) {
                const token = await tokenServices.encode(Usuario);
                res.status(200).send({
                    message: 'Welcome',
                    token: token,
                    user:
                    {
                        id: Usuario.clientId
                    }
                })
            } else {
                //error en la autenticación
                res.status(401).json({
                    error: 'Wrong username or password.'
                })
            }
        } else {
            //error en la autenticación
            res.status(404).json({
                error: 'Wrong username or password.'
            })
        }
    } catch (error) {
        res.status(500).send({
            error: '¡Server Error!'
        })
        next(error);
    }
};