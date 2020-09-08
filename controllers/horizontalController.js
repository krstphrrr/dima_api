
const { Op } = require("sequelize");
const horFlux = require('../models/tblHorizontalFlux')



exports.getHorFlux = (req, res, next) =>{
  console.log(Op)
  endDate = new Date()
  startDate = createDate(0,0,-6)
  console.log(endDate)
  console.log(startDate)
  horFlux.findAll({
    where:{
      DateEstablished:{
        [Op.between]: [startDate, endDate]
      }
    },
    limit:5
  })
  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}

// year modifier function : https://stackoverflow.com/a/37003268
function createDate(days, months, years) {
  var date = new Date(); 
  date.setDate(date.getDate() + days);
  date.setMonth(date.getMonth() + months);
  date.setFullYear(date.getFullYear() + years);
  return date;    
}