var express= require('express');
var mongoose= require('mongoose');
var bodyParser= require('body-parser');
var {employModel}=require('./model/empmodel')

var apps=express();


apps.use(bodyParser.json());
apps.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://shaji:ponnu123@cluster1.u2cuq.mongodb.net/empdb?retryWrites=true&w=majority",{ useNewUrlParser: true },{ useUnifiedTopology: true })


apps.post('/add', async(req, res)=>{

    try
    {
        
      var data= new employModel(req.body)

      var result= await data.save();
      res.json(result)
    }
    catch(error){

        res.status(500).send(error);

    }
})
 apps.post('/search', async(req, res)=>{
     try
     {
         employModel.find(req.body,(error,data)=>{
             
             if(error){throw error}
             else{res.json(data)}
         })
     }
     catch(error){res.status(500).send(error);

     }
 })






apps.post('/delete', async(req, res)=>{
    try
    {
       employModel.findByIdAndDelete(req.body.id,(error,data)=>{

           if (error){res.send(error);
        }
           else{
               res.json({'status':'success'});
           }
       })
        
    }
    catch(error){
        res.status(500).send(error)
    }
})
apps.post('/update', async(req,res)=>{
    try
    {
        employModel.findByIdAndUpdate(req.body.id, 
            {employeeName:req.body.employeeName,employeeCode:req.body.employeeCode,
            employeeAddress:req.body.employeeAddress,employeePhoneno:req.body.employeePhoneno,
            employeeDesignation:req.body.employeeDesignation,employeeSalary:req.body.employeeSalary,
            employeeEmailId:req.body.employeeEmailId,employeeCoName:req.body.employeeCoName},(error,data)=>{

                if (error){throw error}
                
                else{
                    res.json({'status':'success'});
                }

            })
            
    }
    catch(error){
        res.status(500).send(error)
    }

})




apps.listen(process.env.PORT || 3002,function(){
    console.log("Your Server is working fine");
})