const gapDet = require('../models/tblGapDetail')

exports.getGapDet = (req, res, next) =>{
  gapDet.findAll({
    where:req.query
  })
  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}

exports.getGapDetPK = (req, res, next) =>{
  let whichPK = req.query
  gapDet.findAll({
    where: whichPK
  })
  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}