import Pool from 'pg-pool'


const pool = new Pool({
    user: 'postgres',
    password: 'qwerty',
    database: 'rest_api',
    host: 'localhost',
    port: 5432
})


async function postgres() {
    try {
        const client = await pool.connect()
        return client
    } catch (error) {
        console.log("PG_ERROR:", error);
    }
}

export default postgres