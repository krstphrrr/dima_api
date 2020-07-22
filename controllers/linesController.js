const Lines = require('../models/tblLines')

exports.getLines = (req, res, next) =>{
  Lines.findAll({
    where:req.query,

  })
  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}
