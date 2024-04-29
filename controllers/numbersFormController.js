const numbers = [1, 5, 7, 2];

const getNumbers = (req, res) => {
    res.send(numbers);
}

const getNumberById = (req, res) => {
    const id = req.params.id
    if (id && id < 4 && id > -1){
        res.status(200).send({num:numbers[id]})
    } else {
        res.status(404).send({msg: "Nav tāda elementa"});
    }
}

module.exports = {getNumbers, getNumberById};