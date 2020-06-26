const gapHeader = require('../models/tblGapHeader')

exports.getGapHeader = (req, res, next) =>{
  gapHeader.findAll()
  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}

exports.getGapHeaderPK = (req, res, next) =>{
  let whichPK = req.query
  gapHeader.findAll({
    where: whichPK
  })
  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}