const Annotaion = require("../Models/annotationData");

module.exports ={
   async read(req,res){
    const priority = req.query;

    const priorityNotes = await Annotaion.find(priority);
    return res.json(priorityNotes);
    },
    async update(req,res){
        const {id} = req.params;
        const AnnotaionUpdate = await Annotaion.findOne({_id: id});
        if(AnnotaionUpdate.priority){
            AnnotaionUpdate.priority = false;
        }else{
            AnnotaionUpdate.priority = true;
        }

        await AnnotaionUpdate.save();
        return res.json(AnnotaionUpdate);
    }
}