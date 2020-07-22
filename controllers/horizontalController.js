const horFlux = require('../models/tblHorizontalFlux')

exports.getHorFlux = (req, res, next) =>{
  horFlux.findAll({
    where:req.query,

  })
  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}
