const lpiDet = require('../models/tblLPIDetail')

exports.getLPIDet = (req, res, next) =>{
  lpiDet.findAll({
    where:req.query,

  })
  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}

