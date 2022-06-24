import cakeSchema from "../util/cakeSchema.js";
import db from "../database/db.js";

export async function createCake(req, res) {
    const cake = req.body;
    const {error} = cakeSchema.validate(cake)
    if(error) {
        return res.status(400).send(error)
    }
    try{
        const cakeData = await db.query('SELECT * FROM cakes WHERE name = $1', [cake.name]);
        if(cakeData.rowCount > 0){
            return res.sendStatus(409);
        }

        const {name, price, description, image} = cake;

        await db.query(`INSERT INTO cakes (name, price, description, image) VALUES ( $1, $2, $3, $4)`, [name, price, description, image])
        res.sendStatus(201);

    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}