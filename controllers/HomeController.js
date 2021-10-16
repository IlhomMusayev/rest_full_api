export default class HomeController {
    static async HomeGetController(req, res, next) {
        try {
            res.json({
                ok: true,
                message: 'OK',
                data: { 
                    message: 'Welcome to the API'
                }
            })
        } catch (error) {
            next(error)
        }
    }
}