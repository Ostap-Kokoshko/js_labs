const db = require('../db')

class StadiumController {
    async createStadium(req, res) {
        const {name, description, price, type} = req.body;
        const newStadium = await db.query(`INSERT INTO stadiums (name, description, price, type) values ($1, $2, $3, $4) RETURNING *`, [name, description, price, type]);

        res.json(newStadium.rows[0])
    }

    async getStadiums(req, res) {
        const { minPrice, maxPrice, sortStadium, searchStadium } = req.query;
        let query = "SELECT * FROM stadiums ";
        if (minPrice !== "" || maxPrice !== "" || searchStadium !== "") {
            query += " WHERE ";

            query +=
                minPrice !== ""
                    ? ` price >= ${parseFloat(minPrice)} `
                    : " price >= 0 ";

            query += " AND ";

            query +=
                maxPrice !== ""
                    ? ` price <= ${parseFloat(maxPrice)} `
                    : ` price <= ${Number.MAX_SAFE_INTEGER} `;

            query += ` AND LOWER(name) LIKE LOWER('%${searchStadium}%') `;
        }

        if (sortStadium !== "") {
            query += ` ORDER BY ${sortStadium} `;
        }

        const sortedStadiums = await db.query(query);
        res.json(sortedStadiums.rows);
    }

    async getDefaultStadiums(req, res) {
        const stadiums = await db.query(`SELECT * FROM stadiums`)
        res.json(stadiums.rows)
    }

    async getOneStadium(req, res) {
        const id = req.params.id;
        const oneStadium = await db.query(
            `SELECT * FROM stadiums WHERE stadiums.id = $1`,
            [id]
        );
        res.json(oneStadium.rows[0]);
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