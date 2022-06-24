import joi from 'joi';

const orderSchema = joi.object({

    clientId:joi.number(),
    cakeId:joi.number(),
    quantity:joi.number().greater(0).less(5).required(),
    totalPrice:joi.number(),
});

export default orderSchema;