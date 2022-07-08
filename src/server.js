import express from "express";
const app = express();
const puerto = 8080;
import router from './routes/index.js';


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', router)

app.listen(puerto, err => {
    if(err) {
        console.log(`Hubo un error al inciar el servidor ${err}`)
    } else {
        console.log(`Servidor escuchando el puerto: ${puerto}`)
    }
})