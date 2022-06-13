const express = require("express")
const app = express()
const friendsRouter = require("./routes/friends.router")

const messagesRouter = require("./routes/messages.router")
const path = require("path")
const PORT = 3001

app.set("view engine", "hbs")
app.set("vies", path.join("__dirname", "views"))

app.use((req, res, next) => {
  const start = Date.now()
  next()
  const delta = Date.now() - start
  //delta is the amount it take for the request to complete
  console.log(`${req.method} ${req.url} ${delta}ms`)
})

app.get("/", (req, res) => {
  res.render("index", {
    title: "My Friends are very clever",
    caption: "Let's go skiing"
  })
})

app.use(express.static(path.join(__dirname, "public")))

app.use(express.json())

app.use("/friends", friendsRouter)
app.use("/messages", messagesRouter)

app.listen(PORT, () => {
  console.log(`The app is listening on port ${PORT}🚀`)
})
