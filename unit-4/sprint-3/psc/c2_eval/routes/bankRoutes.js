const express = require("express")
const BranchDetail = require("../models/branchDetailModel")
const MasterAccount = require("../models/masterAccountModel")
const FixedAccount = require("../models/fixedAccountModel")
const router = express.Router();


router.post("/branchDetail", async (req, res) => {
    try{
        const createdBranch = await BranchDetail.create(req.body);
        return res.status(201).send(createdBranch);
     }
    catch(err){
        console.log(err)
    }
})

router.get("/branchDetail", async (req, res) => {
    try{
        const createdBranch = await BranchDetail.find().lean().exec();
        return res.status(201).send(createdBranch);
     }
    catch(err){
        console.log(err)
    }
})

router.post("/masterAccount", async (req, res) => {
    try{
        const createdAccount = await MasterAccount.create(req.body);
        return res.status(201).send(createdAccount);
     }
    catch(err){
        console.log(err)
    }
})

router.get("/masterAccount", async (req, res) => {
    try{
        const masterAccount = await MasterAccount.find().lean().exec();
        return res.status(201).send(masterAccount);
     }
    catch(err){
        console.log(err)
    }
})

router.post("/fixedAccount", async (req, res) => {
    try{
        const createdAccount = await FixedAccount.create(req.body);
        const master = await MasterAccount.findByIdAndUpdate(req.body.master_id, {$inc : {balance : req.body.balance}}, {new : true})
        return res.status(201).send(createdAccount);
     }
    catch(err){
        console.log(err)
    }
})

router.delete("/fixedAccount/:id", async(req, res) => {
    try{
       const fixedAccount = await FixedAccount.findByIdAndDelete(req.params.id).lean().exec();
       const master = await MasterAccount.findByIdAndUpdate(fixedAccount.master_id, {$inc : {balance : -fixedAccount.balance}}, {new : true})


       //calculate interest from start Date till current Date;

       const currentDate = new Date();
       const diffTime = Math.abs(currentDate.getMilliseconds() - fixedAccount.startDate)
       const diffDays = Math.ceil(diffTime/(24*60*60*1000))
       const interestEarned = Math.floor(diffDays*fixedAccount.interestRate*fixedAccount.balance/36500)

       //calculate penalty/fine at 2% from currentDate till maturity Date;
       
            let penalty = 0;
            const diffTime2 = Math.abs(fixedAccount.maturityDate - currentDate)
            const diffDays2 = Math.ceil(diffTime2/(24*60*60*1000))
            penalty = Math.floor((fixedAccount.balance*diffDays2*2)/36500);

       const totalInterest = interestEarned - penalty;

       const totalAmount = totalInterest + fixedAccount.balance;


       const response = {
           finalAmount : totalAmount
       }

       return res.json(response)
     }
    catch(err){
        console.log(err)
    }
})


module.exports = router;