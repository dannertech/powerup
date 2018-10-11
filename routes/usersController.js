var express = require('express');
var router = express.Router();

const { User } = require('../db/model')

/* GET home page. */
router.get('/', async (req, res) => {
const users = await User.find()
res.send(users)
});




router.get('/:id', async (req,res) => {
const user = await User.findById(req.params.id)
res.send(user)
})

router.post('/users', )

router.delete('/:id', async (req,res) => {
await User.findByIdAndRemove(req.params.id)
res.sendStatus(200)
})

module.exports = router;
