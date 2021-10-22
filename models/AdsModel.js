export default class UserModel {
    static async createAds(client, ads_name, ads_about) {
        try {
            let response = await client.query(
                `INSERT INTO ads (
					ads_name, 
					ads_about
				) VALUES (
					$1, 
					$2				
                ) 
				RETURNING *`,
                [ads_name, ads_about]
            );

            return response.rows
        } catch (error) {
            console.log(error + "");
        }
    }

    static async findOneAdsById(client, id) {
        try {
            let response = await client.query(`
                SELECT * FROM ads 
                WHERE 
                ads_id='${id}';
            `);
            return response.rows
        } catch (error) {
            console.log("Login: " + error + "");
        }
    }

    static async AllAds(client) {
        try {
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