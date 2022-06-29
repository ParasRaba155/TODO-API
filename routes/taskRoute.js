import express from 'express';
import todoModel from '../data/models/todoSchema.js';
import log from '../utils/logger.js';
const route = express.Router();


// for creating the task
route.post("/", (req, res)=>{
    // res.send("This method will work by providing data in body");
    let newTask = new todoModel();
    newTask.name = req.body.name;
    newTask.desc = req.body.desc;
    newTask.status = req.body.status;

    newTask.save(function(err,data){
        if(err){
            log.error(err);
        }
        else{
            res.send("Data Inserted");
        }
    });
});

// to retrive all the tasks
route.get("/", (req, res)=>{
    var taskList = [];
    todoModel.find({},function(err, tasks){
        tasks.forEach(function(task){
            taskList.push(task);
        });
        res.send(taskList);
    });
});

// Update a task
route.patch("/:id", (req,res)=>{
    todoModel.findByIdAndUpdate(req.params.id,req.body,{ new : true }).then((task)=>{
        if(!task){
            res.status(404).send();
        }
        res.send(task);
    });
});

// delete a task
route.delete("/:id", (req,res)=>{
    todoModel.findByIdAndDelete(req.params.id,function(err,tasks){
        if(err){
            log.error(err);
        }
        else{
            res.send("Deleted Successfully");
        }
    });
});

// get task from detals
route.get("/:id",(req,res)=>{
    todoModel.findById(req.params.id, function(err,task){
        if(err){
            log.error(err);
       }else{
            res.send(task);
       }
    });
});
export default route;