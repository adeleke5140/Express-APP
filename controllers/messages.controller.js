const path = require("path")

const getMessages = (req, res) => {
  res.render("messages", {
    title: "Messages to my friend",
    friend: "Elon Mosk"
  })
  // res.sendFile(
  //   path.join(__dirname, "..", "public", "images", "mountainski.jpg")
  // )
}

const postMessage = (req, res) => {
  res.send("Post successful")
  console.log("Updating messages...")
}

module.exports = {
  getMessages,
  postMessage
}
