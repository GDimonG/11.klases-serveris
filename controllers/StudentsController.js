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
        knex('skoleni').insert({title: req.body.title, body: req.body.body}).then(
            res.status(201).send({title: req.body.title, body: req.body.body})
        )
    } catch (err) {
        res.status(500).send({error:err.message})
    }
}


const getStudentsById = (req, res) => {
    try{
        const postId = req.params.id
        knex('skoleni')
        .where ({id: postId})
        .first('*')
        .then((row) => {
            res.send(row);
        })
    } catch (err) {
        res.status(500).send({error:err.message})
    }
}



module.exports = { getStudents,postStudents,getStudentsById };