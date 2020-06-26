const horFlux = require('../models/tblHorizontalFlux')

exports.getHorFlux = (req, res, next) =>{
  horFlux.findAll()
  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}

exports.getHorFluxPK = (req, res, next) =>{
  let whichPK = req.query
  horFlux.findAll({
    where: whichPK
  })
  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}