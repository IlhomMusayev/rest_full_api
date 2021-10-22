import { Router } from 'express'
import AdsRouteCantroller from '../controllers/AdsCantroller.js'


const AdsRoute = Router()

AdsRoute.get('/', AdsRouteCantroller.AddsGetCantroller)



export default AdsRoute