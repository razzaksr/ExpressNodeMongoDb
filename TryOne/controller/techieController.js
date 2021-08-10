const express=require('express')
const mongoose=require('mongoose')
const tech=mongoose.model('techie')

const router = express.Router()

router.get('/',(req,res)=>{
    res.render('techie/newOrExist',{
        title:"New Record"
    })
})

router.post('/',(req,res)=>{
    newOne(req,res)
})

function newOne(req,res)
{
    let hey=new tech();
    hey.name=req.body.name;
    hey.contact=req.body.contact;
    hey.expert=req.body.expert;
    hey.exp=req.body.exp;
    hey.commercial=req.body.commercial;
    hey.save((err)=>{
        if(!err)
            res.redirect('techie/show')
        else
            console.log(err)
    })
}

router.get('/show',(req,res)=>{
    res.json("listing")
})

module.exports=router;