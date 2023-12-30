const router = require('express').Router()
const Person = require("../models/personModel")



// Routes. These blocks should be placed in different files under "routes/" directory
// but let's keep this simple.

router.get("/", (request, response,next) => {
    Person.find({}).then(p=>response.json(p));
    
  })
  
  router.get("/:id", (request, response,next) => {
    const idParam = request.params.id
    Person.findById(idParam).then(p=>{
      if(p){
        response.json(p)
      }else{
        response.status(404).end()
      }
        
    }).catch(error=>next(error))
  
  })
  
  router.delete("/:id", (request, response,next) => {
    const idParam = request.params.id
    Person.findByIdAndDelete(idParam).then(p=>{
        response.status(204).end()
    })
    .catch(error => next(error))

  })
  
  
  router.post('/', (request, response ,next) => {
  
    const body = request.body
  
    if (body.name === undefined) {
      return response.status(400).json({ error: 'content missing' })
    }
  
    const note = new Person({
        id:body.id,
      name: body.name,
      number: body.number || false,
    })
  
    note.save().then(savedNote => {
      response.json(savedNote)
    })
  })
  
  module.exports = router