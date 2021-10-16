import router from "./UserRoutes.js";

export default function routes(app) {
    app.use('/', router)




    app.use((req, res, error) => {
        res.status(404).send({
            status: 404,
            message: 'Route Not Found'
        })
    })
}