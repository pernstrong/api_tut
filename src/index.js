import 'dotenv/config';
import cors from 'cors'
import express from 'express'
import { users, messages } from './data'
// import { v4 as uuidv4 } from 'uuid'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

// app.get('/users', (req, res) => {
//   return res.send('GET HTTP method on user resource')
// })

app.get('/users', (req, res) => {
  return res.send(Object.values(users))
})

app.get('/users/:userId', (req, res) => {
  return res.send(users[req.params.userId])
})

app.get('/messages', (req, res) => {
  return res.send(Object.values(messages))
})

app.get('/messages/:messageId', (req, res) => {
  return res.send(messages[req.params.messageId])
})

app.post('/messages', (req, res) => {
  // const id = uuidv4();
  const id = Date.now().toString();
  const message = {
    id,
    text: req.body.text
  }

  messages[id] = message
  return res.send(message)
})

app.post('/users', (req, res) => {
  return res.send('POST HTTP method on user resource')
})

app.put('/users/:userId', (req, res) => {
  return res.send(`PUT HTTP method on user/${req.params.userId} resource`)
})

app.delete('/users:/userId', (req, res) => {
  return res.send(`DELETE HTTP method on user/${req.params.userId} resource`)
})

app.listen(process.env.PORT, () => console.log(`Api tutorial app listening on port ${process.env.PORT}...`))



// const userCredentials = { firstname: 'Robin' };
// const userDetails = { nationality: 'German' };

// const user = {
//   ...userCredentials,
//   ...userDetails,
// };

// console.log(user);

// console.log(process.env.SOME_ENV_VARIABLE);