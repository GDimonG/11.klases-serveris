const knex = require('../config/knex');

const getKlases = (req, res) => {
    try{
    knex.select('*').from('klases')
    .then((rows) => {
        res.send(rows);
    }) 
    .catch((err) => {
        console.log(err);
    })
    }  catch (err) {
        res.status(500).send ({error:err.message})
    }
}

const getKlasesById = (req, res) => {
    try{
        const id = req.params.id
        knex('skoleni')
        .where ({class_id:id})
        .select('full_name')
        .then((row) => {
            res.send(row);
        })
    } catch (err) {
        res.status(500).send({error:err.message})
    }
}

const postKlases = (req, res) => {
    try{
        knex('klases').insert({name: req.body.name}).then(
            res.status(201).send({name: req.body.name})
        )
    } catch (err) {
        res.status(500).send({error:err.message})
    }
}


module.exports = { getKlases, getKlasesById, postKlases };