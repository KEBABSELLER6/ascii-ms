import express from 'express'
const app = express()
import {limiter} from '../src/middlewares/rateLimiter.js'
import {routerV1} from './api/routerV1.js'
import { handleErrors } from './middlewares/errorHandler.js'

app.use(express.json())
app.use(limiter)
app.use('/v1/api', routerV1)
app.use(handleErrors)

const PORT = process.env.PORT || 8080

export default app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})