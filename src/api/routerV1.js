import express from 'express'
import {getImageRes} from '../util/util.js'
import validateRequests from '../middlewares/requestValidator.js'
const router = express.Router()

router.use(validateRequests)

router.get('/billy-herrington', (req, res) => {
    return res.status(200).json({
        result: getImageRes(req.query.raw, 'billy-herrington')
    })
})

router.get('/shrek', (req, res) => {
    return res.status(200).json({
        result: getImageRes(req.query.raw, 'shrek')
    })
})

router.get('/random', (req, res) => {
    return res.status(200).json({
        result: getImageRes(req.query.raw, null)
    })
})


export const routerV1 = router