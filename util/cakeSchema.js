import joi from 'joi';

const cakeSchema = joi.object({
    name: joi.string().min(2).required(),
    price:joi.number().greater(0).positive().required(),
    description:joi.string(),
    image: joi.string().required(),
});

export default cakeSchema;