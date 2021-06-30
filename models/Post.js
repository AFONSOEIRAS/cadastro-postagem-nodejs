const db = require("./db")

const Post = db.sequelize.define("postagens", {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    },
})

/**
executado apenas quando for criar o model pela primeira vez
Post.sync({force:true})
**/
module.exports = Post