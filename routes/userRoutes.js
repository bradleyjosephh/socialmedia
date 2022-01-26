const router = require('express').Router()
const { User } = require('../models')

// GET all users
router.get('/users', async function (req, res) {
  const userData = await User.find({}).populate('cat birds')
  res.json(userData)
})

// GET one User by id
router.get('/users/:id', async function (req, res) {
  const userData = await User.findById(req.params.id).populate('cats birds')
  res.json(userData)
})

// POST one User
router.post('/users', async function (req, res) {
  const userData = await User.create(req.body)
  res.json(userData)
})

// PUT one User by id
router.put('/users/:id', async function (req, res) {
  await User.findByIdAndUpdate(req.params.id, req.body)
  res.sendStatus(200)
})

// DELETE one User by id
router.delete('/users/:id', async function (req, res) {
  await User.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

module.exports = router