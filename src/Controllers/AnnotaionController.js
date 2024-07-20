const Annotaion = require("../Models/annotationData");

module.exports = {
  async  read(req, res){
      const annotationList = await Annotaion.find();
      return res.json(annotationList);
      
    },

   async create(req,res) {
        const { title, notes, priority} = req.body;

        if(!notes || !title){
          return res.status(400).json({error: "Necessario um titulo/ anotação"})
        }

        const annotationCreated = await Annotaion.create({
          title,
          notes,
          priority,
        });
        console.log(annotationCreated)

        return res.json(annotationCreated);
   },

   async delete(req,res){
    const {id} = req.params;

    
    const annotationDelete = await Annotaion.findByIdAndDelete({_id: id});
    if(annotationDelete){
      return res.json(annotationDelete);
    }
    return res.status(401).json({ error: "Não foi encontrado o registro"});
   },


}