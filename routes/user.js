import express from 'express'
const router = express.Router()

router.get('/',(req,res)=>{res.send("first msg")})
router.get('/new',(req,res)=>{res.send("new msg")})









export default router