
var mongoose= require('mongoose');


var employeeSchema= new mongoose.Schema({

    employeeName:{type:String},
    employeeCode:{type:String},
    employeeAddress:{type:String},
    employeePhoneno:{type:String},
    employeeDesignation:{type:String},
    employeeSalary:{type:String},
    employeeEmailId:{type:String},
    employeeCoName:{type:String}

})
var employModel= new mongoose.model("employs",employeeSchema);

module.exports={employModel}

