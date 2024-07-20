const Annotation = require("../Models/annotationData")

module.exports ={
    
    async update(req,res){
        const {id} = req.params;
        const { notes } = req.body;

        const AnnotationUptade = await Annotation.findOne({_id: id});

        if(notes){
            AnnotationUptade.notes = notes;
            
        }await AnnotationUptade.save();
        return res.json(AnnotationUptade);
    }
}