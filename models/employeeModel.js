const mongoose=require("mongoose");


//route handler
const empSchema=new mongoose.Schema({
	id:{type: Number},
	firstName:{type: String,required:true,default:'null'},
	lastName:{type: String,required:true,default:'null'},
	email:{type: String,required:true,default:'null'},
	country:{type: String,default:'India'},
	city:{type: String},
	state:{type: String},
	pincode:{type: Number,required:true,default:'null'},
	address:{type:String}
},
{
	timestamps:true
}
);
module.exports=mongoose.model("EmployeeData",empSchema);