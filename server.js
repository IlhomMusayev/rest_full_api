import express from "express";

import "dotenv/config";
import routes from "./routes/routes.js";
import postgres from './modules/database.js'
import path from 'path'



const app = express();
const POST = process.env.POST || 3000;

const __dirname = path.resolve()

async function main() {
    try {
        app.listen(POST, () => {
            console.log(`Server is running on port ${POST}`);
        })

        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))
        app.use(express.static(path.join(__dirname, 'public')))


        app.use(async (req, res, next) => {
            req.client = await postgres()

            
            next()
        })
        
    }catch(error) {
        console.log("SERVER ERROR:", error);
    } 
    
    finally {
        routes(app);
    }
}

main()