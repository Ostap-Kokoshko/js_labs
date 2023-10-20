const db = require('../db')

class StadiumController {
    async createStadium(req, res) {
        const {name, description, price, type} = req.body;
        const newStadium = await db.query(`INSERT INTO stadiums (name, description, price, type) values ($1, $2, $3, $4) RETURNING *`, [name, description, price, type]);

        res.json(newStadium.rows[0])
    }
    async getStadiums(req, res) {
        const stadiums = await db.query(`SELECT * FROM stadiums`)
        res.json(stadiums.rows)
    }
    async updateStadium(req, res) {
        const {name, description, price, type, id} = req.body;
        const stadium = await db.query(`UPDATE stadiums SET name = $1, description = $2, price = $3, type = $4 WHERE id = $5 RETURNING *`, [name, description, price, type, id])
        res.json(stadium.rows)
    }
    async deleteStadium(req, res) {
        const id = req.params.id;
        const stadium = await db.query(`DELETE FROM stadiums WHERE id = $1`, [id])
        res.json(stadium.rows[0]);
    }
}

module.exports = new StadiumController();