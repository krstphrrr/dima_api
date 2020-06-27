const Sites = require('../models/tblSites')

exports.getSites = (req, res, next) =>{
  Sites.findAll({
    where:req.query
  })
  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}

exports.getSitesSK = (req, res, next) =>{
  // doesn't have primarykey, use sitekey instead
  let whichSK = req.query
  Sites.findAll({
    where: whichSK
  })
  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}