import db from "../database/db.js";
import orderSchema from "../util/orderSchema.js";

export async function createOrder(req, res) {
    const order = req.body;
    const {error} = orderSchema.validate(order)
    if(error) {
        return res.status(400).send(error)
    }
    try{
        const clientData = await db.query('SELECT * FROM clients WHERE id = $1', [order.clientId]);
        if(clientData.rowCount == 0){
            return res.sendStatus(404);
        }
        const cakeData = await db.query('SELECT * FROM cakes WHERE id = $1', [order.cakeId]);
        if(cakeData.rowCount == 0){
            return res.sendStatus(404);
        }

        const {totalPrice, quantity, clientId, cakeId} = order;

        await db.query(`INSERT INTO orders (totalPrice, quantity, clientId, cakeId) VALUES ( $1, $2, $3, $4)`, [totalPrice, quantity, clientId, cakeId])
        res.sendStatus(201);

    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}