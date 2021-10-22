import { Router } from 'express'
import UserRouteCantroller from '../controllers/UserRouteCantroller.js'


const UserRoute = Router()

UserRoute.get('/', UserRouteCantroller.UserRouteGetCantroller)

UserRoute.post('/register', UserRouteCantroller.UserRouteRegisterPostCantroller)

UserRoute.post('/login', UserRouteCantroller.UserRouteLoginPostCantroller)


export default UserRoute