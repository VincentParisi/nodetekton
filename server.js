var express = require('express');
const fs = require( "fs")
const bodyParser = require('body-parser');
const  cl = console.log 


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const  port =process.env.NODETEKTON_PORT || 3010; 
app.use(express.json())

app.get ('/ping', (req, res) => {
  cl (" /Ping called (NodeTekton)   "  )
  res.send( ` Welcome on NodeTekton (/ping  called)   Running on port ${port} `  )
})

app.get ('/', (req, res) => {
  cl (" /  called (NodeTekton)   "  )
  res.send( ` Welcome on NodeTekton (/ called)  Running on port ${port} `  )
})


app.listen(port, () => {
  console.log(`Up and MicroService Node Tekton Running on port ${port}  `);
})

