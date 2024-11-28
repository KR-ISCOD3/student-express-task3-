const Student = require("../model/studentmodel");


// post data
const post_data = async (req,res)=>{
    try{

        const {name,age,email,stuclass} = req.body;

        if(!name||!age||!email||!stuclass){
            return res.status(400).json({message:"Missing some fields"});
        }

        const student = new Student({name,age,email,stuclass});
        await student.save();
        res.status(201).json({
            message: 'Student saved successfully 🥰',
            student
        });
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

// get all data
const get_data = async (req, res) => {
    try{
        const students = await Student.find();
        res.status(200).json({message:"Get Student",students});
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

// put data
const put_data = async (req, res) => {
    try{
        const {name,age,email,stuclass} = req.body;
        const { _id } = req.params;

        if(!name||!age||!email||!stuclass){
            return res.status(400).json({message:"Missing some fields"});
        }
        const student = await Student.findByIdAndUpdate(
            _id,
            {name,age,email,stuclass},
            {new:true});
        
        res.status(200).json({
            message:"Student updated successfully 🥰",
            student:student
        });    
    }catch(err){
        res.status(500).json({
            message: "An error occurred while updating the student ☹️",
            error: err.message,
        });
    }
}

const del_data = async (req, res) => {
    try{
        const { _id } = req.params;

        const student = await Student.findByIdAndDelete(_id,{new:true});
        
        if (!student) {
            res.status(404).json({
                message:"Student not found 🤔",
            }); 
        }
        
        res.status(200).json({
            message:"Student delete successfully 🥰",
        }); 
 
    }catch(err){
        res.status(500).json({
            message: "An error occurred while updating the student ☹️",
            error: err.message,
        });
    }
}

module.exports = {post_data,get_data,put_data,del_data}
