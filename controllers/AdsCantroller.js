import AdsCantroller from '../controllers/'

export default class UserRouteCantroller{
    static async AddsGetCantroller(req, res) {
        const allAds = await AdsCantroller
        try {
            res.status(200).json({
                ok: true,
                message: 'Ok (User Route)',
                data: {
                    ads: allAds
                }
            })
        } catch (error) {
            res.status(404).json({ 
                error: error,
                message: "User Route not found"
            })
        }
    }

}
