const knex = require("knex")


const coneccionKnex = knex({
    client: "sqlite3",
    connection:{
        filename: "Agend.sqlite3"
    }
});

module.exports = coneccionKnex;