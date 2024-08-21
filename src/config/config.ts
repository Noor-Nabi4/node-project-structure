import dotenv from 'dotenv'
const envFile = `.env.${process.env.NODE_ENV || 'development'}`
dotenv.config({ path: envFile })
export default {
    PORT: process.env.PORT
}
