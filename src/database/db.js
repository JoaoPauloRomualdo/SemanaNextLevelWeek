//IMPORTAR A DEPENDENCIA DO SQLITE3
const sqlite3 = require("sqlite3").verbose()

//CRIAR O OBJETO QUE IRA FAZER OPERAÇAO NO BANCO DE DADO
const db = new sqlite3.Database("./src/database/database.db") //=>uma clase

//PARA EXPORTAR O BANCO DE DADOS
module.exports = db
















//UTILIZAR O OBJETO DE BANCO DE DADOS PARA NOSSAS OPERAÇÃO
//db.serialize(() => {

    //com comandos SQL eu vou:


    //1:CRIAR UMA TABELA
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)



    // //2:INSERIR DADOS NA TABELA
    // const query = `
    //     INSERT INTO places(
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);    
    // `

    // const values = [
    //     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
    //     "Papersider",
    //     "Guilherme Gemballa,Jardim América",
    //     "n° 260",
    //     "Santa Cataria",
    //     "Rio do Sul",
    //     "Resíduos Eletrônicos, Lâmpadas"
    // ]

    // function afterInsertData(err) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }

    // //COMANDO QUE INSERE OS DADOS NA TABELA
    // db.run(query, values, afterInsertData)




    //3:CONSULTAR OS DADOS DA TABELA
    // db.all(`SELECT * FROM places`,function(err,rows){
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Aqui estão seus registros:")
    //     console.log(rows)
    // })

    //4:DELETAR UM DADOS DA TABELA
    // db.run(`DELETE FROM places WHERE id = ?`,[1],function(err){
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Registro deletado com sucesso!")
    // })
//})