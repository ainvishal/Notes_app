const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const notesRouter = require('./Routes/NotesRoute')

app.use(cors({
    origin:'http://localhost:5173',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/api/v1', notesRouter)

app.listen(port, () => {
    console.log('server is up and running')
})