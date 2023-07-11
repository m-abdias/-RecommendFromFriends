import { Router } from 'express'
import bodyParser from 'body-parser'
import personRouter from './person.routes'


const routes = Router()

routes.use(bodyParser.urlencoded({ extended: true }))
routes.use(bodyParser.json())

routes.use('/person', personRouter)


routes.get('/health', (req, res) => {
  res.status(200).send({
    status: 'OK!',
  })
})

export default routes
