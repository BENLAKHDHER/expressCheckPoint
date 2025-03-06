import express from 'express'
const router = express.Router()
router.get('/',(req,res)=>{res.send("post msg")})
export default router