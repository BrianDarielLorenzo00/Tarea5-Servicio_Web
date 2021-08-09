const knex = require("./knex");

function crear(cont) {
    return knex("Cont").insert(cont);
};

function obtener(){
    return knex("Cont").select("*");
};


function borrar(id){
    return knex("Cont").where("id", id).del();
};

module.exports = {
    crear,
    obtener,
    borrar
};