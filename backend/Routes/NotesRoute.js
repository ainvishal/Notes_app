const express = require('express');
const Router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

Router.post('/notes', async(req, res) => {

    const response = await prisma.Notes.create({
        data: {
            title: req.body.title,
            description: req.body.description,
            url: req.body.url,
            time: req.body.time
        }
    })
    if(response) {
        res.sendStatus(200);
    }
    else{
        res.sendStatus(404);
    }
    console.log(response)
})
Router.get('/notes', async(req, res) => {
    const response = await prisma.Notes.findMany();
    if(response) {
        res.json(response);
    }
    else{
        res.sendStatus(404);
    }
})
Router.put('/notes', async(req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const desc = req.body.description;
    const url = req.body.url;
    const time = req.body.time;
    console.log(req.body.id)
    const response = await prisma.Notes.update({
        where:{
            id:id
        },
        data:{
            title:title,
            description:desc,
            url:url,
            time:time
        }
    })
    if(response) {
        res.sendStatus(200);
    }
    else{
        res.sendStatus(404);
    }
})

module.exports = Router