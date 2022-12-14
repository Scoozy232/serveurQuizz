const express = require("express");
var cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());
var port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server is running on port 3001");
});
 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});




const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://EmmaLoisel:toucan@cluster0.y10v2kc.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'quizzApi';
let db
MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");
  db = client.db(dbName);
});

app.get('/quizz', async (req,res) => {
  try {
      const docs = await db.collection('quizz').find({}).toArray()
      res.status(200).json(docs)
  } catch (err) {
      console.log(err)
      throw err
  }
})

app.get('/quizz/:id', async (req,res) => {
  const id = parseInt(req.params.id)
  try {
      const docs = await db.collection('quizz').findOne({id})
      res.status(200).json(docs)
  } catch (err) {
      console.log(err)
      throw err
  }
})

app.post('/quizz', async (req,res) => {
  try {
      const quizzData = req.body
      const quizz = await db.collection('quizz').insertOne(quizzData)
      res.status(200).json(quizz)
  } catch (err) {
      console.log(err)
      throw err
  }
  
})
app.put('/quizz/:id', async (req,res) => {
  try {
      const id = parseInt(req.params.id)
      const replacementquizz = req.body
      const quizz = await db.collection('quizz').replaceOne({id},replacementquizz)
      res.status(200).json(quizz)
  } catch (err) {
      console.log(err)
      throw err
  }
})

app.patch('/quizz/:id', async (req,res) => {
  try {
      const id = parseInt(req.params.id)
      const replacementquizz = req.body
      const quizz = await db.collection('quizz').updateOne({id}, {$set: replacementquizz}, {upsert:true})
      res.status(200).json(quizz)
  } catch (err) {
      console.log(err)
      throw err
  } 
})

app.delete('/quizz/:id', async (req,res) => {
  try {
      const id = parseInt(req.params.id)
      const quizz = await db.collection('quizz').deleteOne({id})
      res.status(200).json(quizz)
  } catch (err) {
      console.log(err)
      throw err
  } 
})


app.get('/user', async (req,res) => {
  try {
      const docs = await db.collection('user').find({}).toArray()
      res.status(200).json(docs)
  } catch (err) {
      console.log(err)
      throw err
  }
})

app.get('/user/:id', async (req,res) => {
  const id = parseInt(req.params.id)
  try {
      const docs = await db.collection('user').findOne({id})
      res.status(200).json(docs)
  } catch (err) {
      console.log(err)
      throw err
  }
})

app.post('/user', async (req,res) => {
  try {
      const userData = req.body
      const user = await db.collection('user').insertOne(userData)
      res.status(200).json(user)
  } catch (err) {
      console.log(err)
      throw err
  }
  
})
app.put('/user/:id', async (req,res) => {
  try {
      const id = parseInt(req.params.id)
      const replacementuser = req.body
      const user = await db.collection('user').replaceOne({id},replacementuser)
      res.status(200).json(user)
  } catch (err) {
      console.log(err)
      throw err
  }
})

app.patch('/user/:id', async (req,res) => {
  try {
      const id = parseInt(req.params.id)
      const replacementuser = req.body
      const user = await db.collection('user').updateOne({id}, {$set: replacementuser}, {upsert:true})
      res.status(200).json(user)
  } catch (err) {
      console.log(err)
      throw err
  } 
})

app.delete('/user/:id', async (req,res) => {
  try {
      const id = parseInt(req.params.id)
      const user = await db.collection('user').deleteOne({id})
      res.status(200).json(user)
  } catch (err) {
      console.log(err)
      throw err
  } 
})


app.get('/userQuizz', async (req,res) => {
  try {
      const docs = await db.collection('userQuizz').find({}).toArray()
      res.status(200).json(docs)
  } catch (err) {
      console.log(err)
      throw err
  }
})

app.get('/userQuizz/:id', async (req,res) => {
  const id = parseInt(req.params.id)
  try {
      const docs = await db.collection('userQuizz').findOne({id})
      res.status(200).json(docs)
  } catch (err) {
      console.log(err)
      throw err
  }
})

app.post('/userQuizz', async (req,res) => {
  try {
      const userQuizzData = req.body
      const userQuizz = await db.collection('userQuizz').insertOne(userQuizzData)
      res.status(200).json(userQuizz)
  } catch (err) {
      console.log(err)
      throw err
  }
  
})
app.put('/userQuizz/:id', async (req,res) => {
  try {
      const id = parseInt(req.params.id)
      const replacementuserQuizz = req.body
      const userQuizz = await db.collection('userQuizz').replaceOne({id},replacementuserQuizz)
      res.status(200).json(userQuizz)
  } catch (err) {
      console.log(err)
      throw err
  }
})

app.patch('/userQuizz/:id', async (req,res) => {
  try {
      const id = parseInt(req.params.id)
      const replacementuserQuizz = req.body
      const userQuizz = await db.collection('userQuizz').updateOne({id}, {$set: replacementuserQuizz}, {upsert:true})
      res.status(200).json(userQuizz)
  } catch (err) {
      console.log(err)
      throw err
  } 
})

app.delete('/userQuizz/:id', async (req,res) => {
  try {
      const id = parseInt(req.params.id)
      const userQuizz = await db.collection('userQuizz').deleteOne({id})
      res.status(200).json(userQuizz)
  } catch (err) {
      console.log(err)
      throw err
  } 
})
