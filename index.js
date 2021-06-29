const express = require("express");
const app = express();
//handlebars permite utilizar dados do backend no seu arquivo html
//npm install --save express handlebars
//npm install module-name
//npm install express-handlebars --save
const handlebars = require("express-handlebars");
//bodyparse serve para receber dados de formulário no express
//npm install --save body-parser
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");

//Config
    //Template engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'  }))
    app.set('view engine', 'handlebars');
    //utilizando o express no lougar do Body Parser
    app.use(express.urlencoded({extended:false}))
    app.use(express.json())
    //Conexão com o banco de dados mysql
    const sequelize = new Sequelize("teste","root","123456",{host:"localhost", dialect: "mysql"});

//Rotas
    app.get('/cad', function(req, res){
       res.render("formulario")
    });

    app.post('/add', function(req, res){
        
        res.send(" Texto: "+ req.body.titulo + " Conteúdo: " + req.body.conteudo)
     });

app.listen(8081,function(){
    console.log("Servidor rodando na url http://localhost:8081")
});
