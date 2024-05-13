const knex = require('../config/knex');

const getStudents = (req, res) => {
    try{
    knex.select('*').from('skoleni')
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


const postStudents = (req, res) => {
    try{
        knex('skoleni').insert({full_name: req.body.full_name, class_id: req.body.class_id}).then(
            res.status(201).send({full_name: req.body.full_name, class_id: req.body.class_id})
        )
    } catch (err) {
        res.status(500).send({error:err.message})
    }
}


const getStudentsById = (req, res) => {
    try{
        const class_id = req.params.id
        knex('skoleni')
        .where ({id: class_id})
        .first('*')
        .then((row) => {
            res.send(row);
        })
    } catch (err) {
        res.status(500).send({error:err.message})
    }
}



module.exports = { getStudents,postStudents,getStudentsById };