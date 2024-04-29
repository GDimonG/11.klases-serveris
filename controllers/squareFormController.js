const squareNumber = (req, res) => {
    try{
        const num = req.body.num;
        if(!num || ! parseFloat(num)){throw Error("num not found")}
        res.send({num_squared: num*num})
    }catch(err){
        res.status(400).send({msg: err.message})
    }
}

module.exports = { squareNumber };