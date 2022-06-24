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

export async function getOrders(req, res) {
    const { id } = req.params;
    try{
        //vem os dados da ordem
        const ordersData = await db.query('SELECT * FROM orders WHERE id = $1', [id]);
        if(ordersData.rowCount == 0){
            return res.sendStatus(404);
        }

        const [orders] = ordersData.rows;
        // orders.cakeId
        // orders.clientId
        // orders.createdAt;
        // orders.quantity;
        // orders.totalPrice;

        //vem os dados do bolo
        const cakeData = await db.query('SELECT * FROM cakes WHERE id = $1', [orders.cakeid]);
        if(cakeData.rowCount == 0){
            console.log("oiii")
            return res.sendStatus(404);
        }

        //vem os dados do cliente
        const clientData = await db.query('SELECT * FROM clients WHERE id = $1', [orders.clientid]);
        if(clientData.rowCount == 0){
            return res.sendStatus(404);
        }

        //montar a resposta
        res.send({
            client: clientData.rows,
            cake: cakeData.rows,
            createdAt: orders.createdAt,
            totalPrice :  orders.totalprice,
            quantity:  orders.quantity,
        }).status(200)

    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}

export async function getAllOrders(req, res) {
    try{
        //vem os dados da ordem
        const ordersData = await db.query('SELECT * FROM orders');
        if(ordersData.rowCount == 0){
            return res.sendStatus(404);
        }

        console.log(ordersData.rows)//aqui vem todos os ids
        const [orders] = ordersData.rows;

        console.log(ordersData.rows.cakeid)
        //vem os dados do bolo
        const cakeData = await db.query('SELECT * FROM cakes WHERE id = $1', [orders.cakeid]);
        if(cakeData.rowCount == 0){
            return res.sendStatus(404);
        }

        //vem os dados do cliente
        const clientData = await db.query('SELECT * FROM clients WHERE id = $1', [orders.clientid]);
        if(clientData.rowCount == 0){
            return res.sendStatus(404);
        }
        console.log(orders.id)
        //montar a resposta
        res.send({
            idOrder: orders.id,
            client: clientData.rows,
            cake: cakeData.rows,
            createdAt: orders.createdAt,
            totalPrice :  orders.totalprice,
            quantity:  orders.quantity,
        }).status(200)

    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}

