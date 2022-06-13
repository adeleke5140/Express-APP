const express = require("express")
const friendsRouter = express.Router()

const {
  getFriend,
  createFriend,
  getFriends
} = require("../controllers/friends.controller")

friendsRouter.get("/", getFriends)

friendsRouter.get("/:id", getFriend)

friendsRouter.post("/", createFriend)

module.exports = friendsRouter
