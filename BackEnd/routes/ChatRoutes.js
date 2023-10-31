const express = require("express");
const { sendChat, getChat, getchatting } = require("../Controllers/ChatController");
const router = express.Router();
router.post('/send',sendChat);
router.get('/getChat/:id',getChat);
router.post('/getchat',getchatting);
module.exports = router;