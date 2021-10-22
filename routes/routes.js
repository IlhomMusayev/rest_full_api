import AdsRoute from "./AdsRoute.js";
import HomeRouter from "./HomeRoutes.js";
import UserRoute from "./UserRoute.js";

export default function routes(app) {
    app.use('/', HomeRouter)
    app.use('/users', UserRoute);
    app.use('/ads', AdsRoute)




    app.use((req, res, error) => {
        res.status(404).send({
            status: 404,
            message: 'Route Not Found'
        })
    })
}