const Joi = require('joi');
const { Schema } = require('mongoose');


module.exports = {
    Schema:{
        AddCat:Joi.object({
            name:Joi.string().required(),
            image:Joi.string().required()
        }),
        AllSchema:{
            id:Joi.object({
                id:Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
            }),
            image:Joi.object({
                image:Joi.string().required()
            })
        }
    }
}


