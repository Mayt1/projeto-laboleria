import db from "../database/db.js";
import clientSchema from "../util/clientSchema.js";

export async function createClient(req, res) {
    const client = req.body;
    const {error} = clientSchema.validate(client)
    if(error) {
        return res.status(400).send(error)
    }
    try{
        const clientData = await db.query('SELECT * FROM clients WHERE name = $1', [client.name]);
        if(client.rowCount > 0){
            return res.sendStatus(409);
        }

        const {name, address, phone} = client;

        await db.query(`INSERT INTO clients (name, address, phone) VALUES ( $1, $2, $3)`, [name, address, phone])
        res.sendStatus(201);

    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}