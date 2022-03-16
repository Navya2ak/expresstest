import express from "express"
import { v4 as uuidv4 } from 'uuid';

const router =express.Router()
let users=[]

router.get('/',(req,res)=>{
    
    res.send(users)
})
router.post('/',(req,res)=>
{
const u=req.body//getting the body of request
const uid={...u,id:uuidv4()}
users.push(uid)
res.send(uid)
}

)
router.get('/:id',(req,res)=>
{//expecting anything through the get request like /users/22 or /users/2345 all give same responsible

    //to response based on the request can usse req.params ..........users/2.....req.params ...>2
    const {id}=req.params
    const v=users.find((us)=>us.id===id)
    res.send(v)
    
           
    
    
})
export default router
