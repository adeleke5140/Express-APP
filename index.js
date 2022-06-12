const express = require("express")
const {
  getFriend,
  createFriend,
  getFriends
} = require("./controllers/friends.controller")
const {
  getMessages,
  postMessage
} = require("./controllers/messages.controller")
const app = express()

const PORT = 3001

app.use((req, res, next) => {
  const start = Date.now()
  next()
  const delta = Date.now() - start
  //delta is the amount it take for the request to complete
  console.log(`${req.method} ${req.url} ${delta}ms`)
})

app.use(express.json())

app.get("/friends", getFriends)

app.get("/friends/:id", getFriend)

app.post("/friends", createFriend)

app.get("/messages", getMessages)

app.post("/messages", postMessage)

app.listen(PORT, () => {
  console.log(`The app is listening on port ${PORT}🚀`)
})
