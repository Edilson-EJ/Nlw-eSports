import express from 'express';

const app = express()

app.get('/ads', (request, response) =>{
    return response.json([
        { id: 1, name: "Aníncio 1"},
        { id: 2, name: "Aníncio 2"},
        { id: 3, name: "Aníncio 3"},
        { id: 4, name: "Aníncio 4"},
        { id: 5, name: "Aníncio 5"}
    ])
})

app.listen(3333)