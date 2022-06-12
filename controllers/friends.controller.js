const friends = [
  {
    id: 0,
    name: "Sir Isaac Newton"
  },
  {
    id: 1,
    name: "Albert Einstein"
  }
]

const getFriends = (req, res) => {
  res.status(200).json(friends)
}

const getFriend = (req, res) => {
  const { id } = req.params
  const friend = friends[id]
  if (friend) {
    res.json(friend)
  } else {
    res.status(404).json({ error: "Friend not found" })
  }
}

const createFriend = (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ error: "name is not present" })
  } else {
    const newFriend = {
      name: req.body.name,
      id: friends.length
    }
    friends.push(newFriend)
    res.json(newFriend)
  }
}

module.exports = {
  getFriends,
  getFriend,
  createFriend
}
