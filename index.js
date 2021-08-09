const express = require ('express');
const app = express();
const Agenda = require("./Agenda/Cont")
const Puerto = 1337;

app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.listen(
    Puerto,
    ()=> console.log(`En vivo en http://localhost:${Puerto}`)
);

app.get("/Cont", async (req,res)=>{
    const Cont = await Agenda.obtener();
    res.status(200).json({Cont});
});


app.post("/Cont", async (req,res)=>{
    const resultados = await Agenda.crear(req.body);
    res.status(201).json({id: resultados[0]});
});



app.delete("/Cont/:id", async (req,res)=>{
    await Agenda.borrar(req.params.id);
    res.status(200).json({ success: true});
}) 