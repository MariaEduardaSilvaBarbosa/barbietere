use("db-patissier");
db.dropDatabase();
db.createCollection("cake");

db.cake.insertOne(
    {
        _id:ObjectId(1),
        nome: "Bolo de chocolate",
        peso: "1 Kg",
        preco: "R$60,00",
        ingredientes:[
            {
                nome:"Ovo",
                qtd: 4
            },
            {
                nome:"Manteiga",
                qtd: "2 colheres de sopa"
            },
            {
                nome:"Açúcar",
                qtd: "2 xícaras de chá"
            },
            {
                nome:"Leite",
                qtd: "1 xícara de chá"
            },
            {
                nome:"Chocolate em pó",
                qtd: "4 colheres de sopa"
            },
            {
                nome:"Farinha de trigo",
                qtd: "3 xícara de chá"
            },
            {
                nome:"Fermento",
                qtd: "2 colheres de sopa"
            },
        ]
    }
)
db.cake.insertOne(
    {
        _id:ObjectId(2),
        nome: "Brownie",
        peso: " 750 g",
        preco: "R$55,00",
        ingredientes:[
            {
                nome:"ovo",
                qtd: 4
            },
            {
                nome:"chocolate em pó",
                qtd:"2 xícaras"
            },
            
            {
                nome:"farinha de trigo",
                qtd: "1 xícara"
            },
          
            {
                nome:"manteiga",
                qtd:"5 colheres"
            },
            {
                nome:"açúcar",
                qtd:"1 xícara"
            },
            {
                nome:"Cacau em pó",
                qtd:"5 colheres"
            }
        ]
    }
)

db.cake.insertOne(
    {
        _id:ObjectId(3),
        nome: "Cheesecake de morango",
        peso: "1 Kg",
        preco: "R$197,99",
        ingredientes:[
            {
                nome:"biscoito maisena",
                qtd:"1 pacote"
            },
            {
                nome:"margarina",
                qtd:"100 g "
            },
            {
                nome:"leite condensado",
                qtd:"1 lata"
            },
            {
                nome:"geléia de morango",
                qtd:"230 g"
            },
            {
                nome:"açúcar",
                qtd:"1/2 xícara de chá"
            },
            {
                nome:"cream cheese",
                qtd:"400 g"
            },
            {
                nome:"ovos",
                qtd:3
            }
            
        ]
    }
)
db.cake.insertOne(
    {
        _id:ObjectId(4),
        nome: "Palha Italiana",
        peso: "880 g",
        preco: "R$25,00",
        ingredientes:[
            {
                nome:"leite condensado",
                qtd:"1 lata"
            },
            {
                nome:"margarina",
                qtd:"1/2 colher"
            },
            {
                nome:"chocolate em pó",
                qtd:"8 colheres"
            },
            {
                nome:"biscoito maisena",
                qtd:"1 pacote"
            }
        ]
    }
)
use("db-patissier");
db.cake.deleteOne({_id:ObjectId("0000000157125c2e958b5208")});

use("db-patissier");
db.cake.find({}, {nome:true, preco: true});


use("db-patissier");
db.cake.find({preco: {$lte:70}}, {nome:true, preco:true});

use("db-patissier");
db.cake.updateOne(
    { _id: ObjectId("0000000257125c2e958b5209")},
    {
        $set: {
            nome: "Brownie",
            peso:"750 g"
        },
        $push: {
             "ingredientes": {
                nome:"nozes",
                qtd: "80g"
             }
        }
    }
);

use("db-patissier");
db.cake.updateOne(
    { _id:ObjectId('333333333333'), "ingredientes.nome": "Ovos"},
    {
        $set: {
            "ingredientes.$.qtd": 3,
        },
    }
);