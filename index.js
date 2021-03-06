if(process.env.NODE_ENV!=='production'){
  require('dotenv').config()
}
const { QueryTypes } = require('sequelize');
const express = require('express')
const app = express()
const db = require('./config/database')
const cors = require('cors')
const helmet = require('helmet')
// const swaggerJsDoc = require('swagger-jsdoc')
// const swaggerUi = require('swagger-ui-express')
const path = require('path')

//route
const dimaRoute = require('./routes/dimaTableGet');

const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: true }));

// app.set('views', path.join(__dirname, 'views'));
// app.set('view-engine', 'pug')


// const swaggerOptions = {
//   swaggerDefinition: {
//     info:{
//       title: 'Dima API',
//       description: 'API to serve to dima data',
//       contact:{
//         name:'kris'
//       },
//       servers:["http://localhost:5005/api/", "https://dima.landscapedatacommons.org/api/"]
//     }
//   },
//   apis:["./routes/*.js"]
// }

// var swaggerUiOpts = {
//   explorer: false,
//   swaggerOptions: swaggerOptions,
//   customCss: '.swagger-ui .topbar { display: none }'
// }


// const swaggerDocs = swaggerJsDoc(swaggerOptions)
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, swaggerUiOpts))

app.use(helmet())
app.use(cors())



db.authenticate()
    .then(() => console.log('database connected...'))
    .catch(err => console.log('error:'+ err));


app.get('/', (req, res) => {
  res.send('dima api up. updated: 04-12-2021 00:00')
  })

app.get('/tables', (req, res)=>{
  db.query("select * from pg_catalog.pg_tables where schemaname != 'pg_catalog' and schemaname != 'information_schema';",{
  
    logging: console.log,
    plain: false,
    raw: true,
    type: QueryTypes.SELECT
    })
     .then(data=>{
      //  console.log(data)
       let result = data.map(a=>a.tablename)
       res.status(200).send(result)
      //  res.render('table.pug', {data:result})
     })
     .catch(err=>{
       console.log(err)
     })
})



app.use('/api', dimaRoute)
db
  .sync({logging:false})
  .catch(err=>{
    console.log(err)
  })
  .then(result=>{
    const server = app.listen(process.env.PORT || 5005)
  })
