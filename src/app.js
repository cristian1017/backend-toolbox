import filesRoutes from './routers/files.routes.js'
import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use('/files', filesRoutes)

export default app
