import Validation from "../validations/vaidation.js"
import UserModel from "../models/UserModel.js"
import SessionModel from "../models/SessionsModel.js"
import { createToken } from "../modules/Jwt.js"


export default class UserRouteCantroller{
    static async UserRouteGetCantroller(req, res) {
        try {
            res.status(200).json({
                ok: true,
                message: 'Ok (User Route)'
            })
        } catch (error) {
            res.status(404).json({ 
                error: error,
                message: "User Route not found"
            })
        }
    }

    static async UserRouteRegisterPostCantroller(req, res) {
        try {
            const { name, email, password } = await Validation.RegisterValidator(req.body)

            console.log(name, email, password);
            const data = await UserModel.createUser(req.client, name, email, password)
            
            const [user] = await data

            const [session] = await SessionModel.create_session(
                req.client,
				req.headers["user-agent"],
				user.user_id
            )

            const token = createToken({
				user_id: user.user_id,
			});


            
            res.status(200).json({
                ok: true,
                message: 'User created successfully',
                data: {
                    token
                }
            })
        } catch (error) {
            res.status(404).json({ 
                error: error,
                message: "User Route not found"
            })
        }
    }

    static async UserRouteLoginPostCantroller(req, res) {
        try {
            const { email, password } = await Validation.LoginValidator(req.body)

            
            const data = await UserModel.findOneByEmail(req.client, email, password)

            const [user] = await data

            const [session] = await SessionModel.create_session(
                req.client,
				req.headers["user-agent"],
				user.user_id
            )

            const token = createToken({
				user_id: user.user_id,
			});

            res.status(200).json({
                ok: true,
                message: 'Login successfully',
                data: {
                    token
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
