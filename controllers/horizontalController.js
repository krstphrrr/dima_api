
const { Op } = require("sequelize");
const horFlux = require('../models/tblHorizontalFlux')
const JSONStream = require('JSONStream')
const QueryStream = require('pg-query-stream')
const {Pool} = require('pg')
const pool = new Pool({
  connectionString:process.env.DIMA
})



exports.getHorFlux = (req, res, next) =>{
  // console.log(Op)
  endDate = new Date()
  console.log(endDate.toISOString())
  startDate = createDate(0,0,-6)
  console.log(endDate)
  console.log(startDate)

  
  // horFlux.findAll({
  //   where:{
  //     DateEstablished:{
  //       [Op.between]: [startDate, endDate]
  //     }
  //   },
  //   limit:5
  // })
  // .then( r => {
  //   res.status(200).json(r)
  // })
  // .catch(err=>{console.log(err)})


  let sql = `
  SELECT * 
  FROM public."tblHorizontalFlux"
  WHERE 
    '[${startDate.toISOString()},${endDate.toISOString()}]'::daterange @> "DateEstablished"::date

`
let values = []
let head = "AND "
if (Object.keys(req.query).length!==0){
let list = []
let count = 1

for(const [key,value] of Object.entries(req.query)){
  console.log(key,value)
  if(Array.isArray(value)){
    
    for (i = 0; i<value.length; i++){
        temp = `"tblHorizontalFlux"."${key}" = $${count}`
        count+=1
        values.push(value[i])
        list.push(temp)
    }
  } else {

      temp = `"tblHorizontalFlux"."${key}" = $${count}`
      count+=1
      values.push(value)
      list.push(temp)    
    
  }
  
}

sql = sql + head + list.join(" AND ")
console.log(sql)


}
pool.connect((err,client, release)=>{
if(err){
  return console.error("error ")
}
if (Object.keys(req.query).length!==0){

  const query = new QueryStream(sql, values)
  const stream = client.query(query)
  stream.on('end',release)
  stream.pipe(JSONStream.stringify()).pipe(res)
} else{
  const query = new QueryStream(sql)
  const stream = client.query(query)

  stream.on('end',release)
  stream.pipe(JSONStream.stringify()).pipe(res)
}
})


}

// year modifier function : https://stackoverflow.com/a/37003268
function createDate(days, months, years) {
  var date = new Date(); 
  date.setDate(date.getDate() + days);
  date.setMonth(date.getMonth() + months);
  date.setFullYear(date.getFullYear() + years);
  return date;    
}