export default class UserModel {
    static async createUser(client, name, email, password) {
        try {
            let response = await client.query(
                `INSERT INTO users (
					user_name, 
					user_email, 
					user_password
				) VALUES (
					$1, 
					$2, 
					crypt($3, gen_salt('bf', 10))
				) 
				RETURNING *`,
                [name, email, password]
            );

            return response.rows
        } catch (error) {
            console.log(error + "");
        }
    }

    static async findOneByEmail(client, email, password) {
        try {
            console.log(email + " " + password);
            let response = await client.query(`
                SELECT * FROM users 
                WHERE 
                user_email='${email}' 
                AND 
                user_password=crypt('${password}', user_password);
            `);
            console.log(response.rows);
            return response.rows
        } catch (error) {
            console.log("Login: " + error + "");
        }
    }

}