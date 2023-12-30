const mongoose = require('mongoose')
const nArgument =process.argv.length;

if(nArgument<3) {
    print("n'oublier pas votre password");
    process.exit(1)
}
const password = process.argv[2];

const dbPath = `mongodb+srv://user1:${password}@cluster0.zigfruj.mongodb.net/?retryWrites=true&w=majority`

    mongoose.connect(dbPath);


const personschema = new mongoose.Schema({
    name: String,
  number: Number,

})
const Person = mongoose.model('Person', personschema)


if(nArgument===3){
    Person.find({}).then(p=>{
        console.log(p)
    
        mongoose.connection.close()
        
    }
    )
}

if(nArgument===5){
const nPersons =new Person( {
    name: process.argv[3],
    number: process.argv[4],
    
})
nPersons.save().then(p=> {
 mongoose.connection.close()})
}


