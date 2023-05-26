const empModel = require("../models/employeeModel");

exports.getAllcont=async(req,res)=>{
        try {
          const dat=await empModel.find({});
        res.status(200).json(dat);
    } catch (error) {
        console.log("error occur in contoller")
    }  
}
exports.getEmpId=async(req,res)=>{
        try {
          const dat=await empModel.findById(req.params.id)
        res.status(200).json(dat);
    } catch (error) {
        console.log("error occur in contoller")
    }  
}
exports.getEmpName=async(req,res)=>{
        try {
          const dat=await empModel.find({firstName:req.params.name}) 
        res.status(200).json(dat);
    } catch (error) {
        console.log("error occur in contoller")
        res.send("name not found")
    }  
}

exports.addEmp=async(req,res)=>{
    try {
        const emp= await empModel.create(req.body)
        res.status(200).json(emp);
    } catch (error) {
        console.log('error occured in controller')
    }  
}

exports.deleteEmp=async(req,res)=>{
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.status(200).send("delete successfull")
    } catch (error) {
        console.log('error occured in controller')    
    }
}

exports.updateEmp=async(req,res)=>{
    try {
        const ids=await empModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
            res.json(ids)

        } catch (error) {
                console.log("error occured in controller")
        }
}