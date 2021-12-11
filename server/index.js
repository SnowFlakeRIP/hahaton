const fastify = require("fastify")({
    logger: true
})
const Pool = require("pg-pool")
const config = {
    user: 'postgres',
    password: '12345678',
    host: 'localhost',
    port: 5432,
    database: 'hahaton',
}

const pool = new Pool(config)

fastify.put('/create-transaction', async (req, res) => {
    try {
        let client = await pool.connect()
        let payload = req.body.payload
        const id = req.body.id
        let payload_db = await client.query(`SELECT summa
                                             FROM users
                                             WHERE id = ${id}`)
        const new_payload = payload + Number(payload_db.rows[0].summa)
        const reply =  await client.query(`UPDATE users
                            SET summa = $1
                            WHERE id = $2`, [new_payload, id])
        res.status(201).send({message:'Запись успешно обновлена'})
    } catch (e) {
        res.send(e)
    }
})


fastify.listen(5000, (err, address) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})
