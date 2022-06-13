const express = require("express")
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

const friendsRouter = require("./routes/friends.router")

app.use("/friends", friendsRouter)

const messagesRouter = require("./routes/messages.router")

app.use("/messages", messagesRouter)

app.listen(PORT, () => {
  console.log(`The app is listening on port ${PORT}🚀`)
})
