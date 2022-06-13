const path = require("path")

const getMessages = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "mountainski.jpg"))
}

const postMessage = (req, res) => {
  res.send("Post successful")
  console.log("Updating messages...")
}

module.exports = {
  getMessages,
  postMessage
}
