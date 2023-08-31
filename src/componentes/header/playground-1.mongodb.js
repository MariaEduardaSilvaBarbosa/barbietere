
//const database = 'NEW_DATABASE_NAME';
//const collection = 'NEW_COLLECTION_NAME';

//CREATE DATABASE TEST
//USE TEST

//apagando a collection antes de inserir novos dados
db.dono.drop();


//CREATE TABLE => createCollection
db.createCollection("dono");

use("MyPet");
db.dono.insertMany([
{
    _id:1,
    nome: "Julia",
    idade: 22,
    animal: 
    [
        {_id:20, nome:"Amora", valor:"3.500,00", raca:"Golden"},
        {_id:21, nome:"Pingo", valor:"2.000,00", raca:"Dachshund"},
        {id:22, nome:"Luna", valor:"1.200,00", raca:"Pinscher"}
    ]
},

{
    _id:2,
    nome:"Maria",
    idade:20,
    animal:
    [
        {_id:30, nome:"Toy", valor:"800,00", raca:"Shih Tzu"},
        {_id:31, nome:"Mailon", valor:"3.800,00", raca:"Dalmata"},
        {_id:32, nome:"Luke", valor:"4.000,00", raca:"Pastor Alemão"}
    ]
},

{
    _id:3,
    nome:"Mário",
    idade:34,
    animal:
    [
        {_id:40, nome:"Zeus", valor:"2.850,00", raca:"Rottweiler"},
        {_id:41, nome:"Joaquim", valor:'3.750,00', raca:"Husky Siberiano"},
        {_id:42, nome:"Simba", valor:"1.850,00", raca:"Pitbull"}
    ]
},

{
    _id:4,
    nome:"Eduardo",
    idade:19,
    animal:
    [
        {_id:50, nome:"Scooby", valor:"4.850,00", raca:"Labrador"},
        {_id:51, nome:"Bob", valor:"2.250,00", raca:"Bulldog"},
        {_id:52, nome:"Nina", valor:"5.200,00", raca:"Lulu da Pomerânia"}
    ]
}

])

//6: Faça uma consulta que liste o nome e animal do dono com _id 2

use("MyPet");
db.dono.find({_id:2}, {nome:true, animal:true});

//07: Faça uma consulta que apague o dono com _id 2
use("MyPet");
db.dono.deleteOne({_id: 2});

//08: Faça uma consulta que liste todos os donos
use("MyPet");
db.dono.find();

//09: Faça uma consulta que apague todos os dados da collection dono
use("MyPet");
db.dono.deleteMany({});

// Faça uma consulta que exclua a collection dono
use("MyPet");
db.dono.deleteOne();

// Faça uma consulta que exclua o banco de dados mypet
use("MyPet");
db.dropDatabase();