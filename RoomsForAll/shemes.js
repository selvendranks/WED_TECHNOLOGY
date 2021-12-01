const Joi = require('joi');

module.exports.RoomSchema =
    Joi.object({     //Joi  schema to validate input
        Room: Joi.object({
            title: Joi.string().required(),
            price: Joi.number().required().min(0),
            image: Joi.string().required().uri(),
            location: Joi.string().required(),
            description: Joi.string().required()
        }).required()
    })