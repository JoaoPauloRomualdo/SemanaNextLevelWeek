//Variavel para chamar o express
const express = require("express");

//Executando o express
const server = express();

//Configurar a pasta public
server.use(express.static("public"))

//HABILIDAR O USO DO REQ.BODY NA NOSSA APP
server.use(express.urlencoded({ extended: true }))

//PEGAR O BANCO DE DADOS
const db = require("./database/db.js")

//UTILIZANDO O TEMPLATE ENGINE (NUNJUNKS)
const nunjunks = require("nunjucks")
nunjunks.configure("src/views", {
    express: server,
    noCache: true
})





//CONFIGURANDO AS ROTAS
//req : Requisição
//res : Resposta




//**ROTA PAGINA INICAL*/
server.get("/", (req, res) => {
    return res.render("index.html")
})
//ROTA PAGINA CREATE
server.get("/create-point", (req, res) => {

    //req.query() query strings da nossa url

    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

    //req.body: O CORPO DO NOSSO FORM

    //INSERIR DADOS NO BANCO DE DADOS
    const query = `
        INSERT INTO places(
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);    
    `

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if (err) {
            console.log(err)
            return res.send("Erro no cadastro")
        }

        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", {saved:true})
    }

    //COMANDO QUE INSERE OS DADOS NA TABELA
    db.run(query, values, afterInsertData)
})

server.get("/serch", (req, res) => {

    const search = req.query.search

    if(search == ""){
        //pesquisa vazia
        return res.render("serch-results.html", { total:0 })
    }

    //PEGAR IS DADOS DO BANCO
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log(err)
        }

        const total = rows.length
        //MOSTRAR A PAGINA HTML COM OS DADOS DO BANCO DE DADOS
        return res.render("serch-results.html", { places: rows, total })
    })

})
//Ligar o servidor
server.listen(3000)