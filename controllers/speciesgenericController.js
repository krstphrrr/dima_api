const SpecGen = require('../models/tblSpeciesGeneric')

exports.getSpecGen = (req, res, next) =>{
  SpecGen.findAll()
  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}

exports.getSpecGenPARAM = (req, res, next) =>{
  let whichPARAM = req.query
  SpecGen.findAll({
    where: whichPARAM
  })
  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}