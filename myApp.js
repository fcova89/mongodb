require('dotenv').config();
const mongoose = require('mongoose');
const uri = "mongodb+srv://fcova89:K2impianti2021!@cluster0.lfhxz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true }); //collego mongoose ad URI Atlas MongoDB

const personSchema = new mongoose.Schema({ //creo Schema per un modello
  name: { 
    type: String,
    required: true},
  age: Number,
  favoriteFoods: [String]
});

let Person = mongoose.model('Person', personSchema); //assegno a Person il modello basato sullo schema PersonShcema

const createAndSavePerson = (done) => {
  /*//create a document instance of Person
  const francesco = new Person({
    name: 3,//'Francesco',
    age: 33,
    favoriteFoods: ['goma wakame','pollo arrosto','pesce']
  });
  francesco.save((err, data) =>{ //è una promise?
    if (err) {
      return console.error(err)
    };// se c'è un errore manda alla console errore
    done(null, data) // se non c'è errore fai partire callback
  })*/
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
