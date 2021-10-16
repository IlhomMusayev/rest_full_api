import express from "express";

import "dotenv/config";
import routes from "./routes/routes.js";



const app = express();
const POST = process.env.POST || 3000;

app.listen(POST, () => {
    console.log(`Server is running on port ${POST}`);
})


async function main() {
    try {


    } finally {
        routes(app);
    }
}

main()