if(process.env.NODE_ENV!=='production'){
  require('dotenv').config()
}

const express = require('express')
const app = express()
const db = require('./config/database')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
// const cors = require('cors')

//route 
const dimaRoute = require('./routes/dimaTableGet')



const swaggerOptions = {
  swaggerDefinition: {
    info:{
      title: 'Dima API',
      description: 'API to serve to dima data',
      contact:{
        name:'kris'
      },
      servers:["http://localhost:5005/api/", "https://dima.landscapedatacommons.org/api/"]
    }
  },
  apis:["./routes/*.js"]
}

var swaggerUiOpts = {
  explorer: false,
  swaggerOptions: swaggerOptions,
  customCss: '.swagger-ui .topbar { display: none }'
}


const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, swaggerUiOpts))


app.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin','http://localhost:4200','https://landscapedatacommons.org', 'https://test.landscapedatacommons.org')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH')
  res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('set-cookie',[
    'same-site-cookie=bar; SameSite=None; Secure'
  ])
  next()
})


db.authenticate()
    .then(() => console.log('database connected...'))
    .catch(err => console.log('error:'+ err));


app.get('/', (req, res) => 
  res.send('dima api up')
)



app.use('/api', dimaRoute)
db
  .sync({logging:false})
  .catch(err=>{
    console.log(err)
  })
  .then(result=>{
    const server = app.listen(process.env.PORT || 5005)
  })