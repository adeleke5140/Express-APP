const getMessages = (req, res) => {
  res.send("<ul><li>Hello ALbert!</li></ul>")
}

const postMessage = (req, res) => {
  res.send("Post successful")
  console.log("Updating messages...")
}

module.exports = {
  getMessages,
  postMessage
}
