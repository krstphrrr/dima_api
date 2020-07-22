const lpiHeader = require('../models/tblLPIHeader')

exports.getLPIHeader = (req, res, next) =>{
  lpiHeader.findAll({
    where:req.query,

  })
  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}

exports.getLPIHeaderPK = (req, res, next) =>{
  let whichPK = req.query
  lpiHeader.findAll({
    where: whichPK,
    limit:1
  })
  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}