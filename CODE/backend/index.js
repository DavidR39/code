import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/user.js'

/* USE .ENV FILE */
dotenv.config()

/* EXPRESS CONFIG */
const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

/* API ROUTES */
app.use('/user', userRoutes)

/* DB CONNECTION */
const CONNECTION_URL = process.env.MONGO_URI
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)

