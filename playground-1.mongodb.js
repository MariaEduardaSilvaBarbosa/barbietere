// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('db_barbie');

// Create a new document in the collection.
db.getCollection('filmes').insertMany([
  
    {
        _id: 9,
        titulo: "Barbie",
        descricao: "programdno",
        imagem: "/barbie.jpg"
    },
    {
        _id: 8,
        titulo: "Bezouro Azul",
        descricao: "Programando",
        imagem: "/beazul.png"
    },
    {
        _id: 6,
        titulo: "Elementos",
        descricao: "Programando",
        imagem: "/elementos.jpg"
    },
    {
        _id: 4,
        titulo: "Oppenheimer",
        descricao: "Programando",
        imagem: "/oppenheimer.jpg"
    }
  
]);
