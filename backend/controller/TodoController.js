const ToDoModels = require('../models/TodoModels')

module.exports.getToDo = async(req,res)=>
{
    const toDo = await ToDoModels.find()
    res.send(toDo)
}
module.exports.saveToDo = async(req,res)=>
{
    const {text}=req.body

   ToDoModels
   .create({text})
   .then((data)=>
   {
    console.log("added successfully...")
    console.log(data)
    res.send(data)
   })

}
module.exports.updateToDo = async(req,res)=>
{
    const { _id,text}= req.body

   ToDoModels
  .findByIdAndUpdate(_id,{text})
   .then((data)=>
   {
    console.log("update successfully...")
    res.send(data)
   })
   .catch((err)=>console.log(err))

}
module.exports.deleteToDo = async(req,res)=>
{
    const { _id}= req.body

   ToDoModels
  .findByIdAndDelete(_id)
  .then((data)=>{console.log("deleted successfully")
res.send(data)})


}