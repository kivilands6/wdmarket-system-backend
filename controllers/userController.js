const User = require('../models/User')
const jwt = require("jsonwebtoken")

// how long a token lasts before expiring
const tokenLasts = "365d"

//Check if web token has expired
exports.checkToken = function (req, res) {
    try {
      req.apiUser = jwt.verify(req.body.token, "secretkeyappearshere")
      res.json(true)
    } catch (e) {
      res.json(false)
    }
}

exports.apiLogin = function (req, res) {
    let user = new User(req.body)
    console.log("alert")
    user
      .login()
      .then(function (result) {
        res.json({
          token: jwt.sign({ _id: user.data._id, username: user.data.username, avatar: user.avatar }, "secretkeyappearshere", { expiresIn: tokenLasts }),
          username: user.data.username,
          avatar: user.avatar
        })
      })
      .catch(function (e) {
        res.json(false)
      })
  }

exports.login = () => {

}

exports.logout = () => {
    
}

exports.register = function(req, res) {
    let user = new User(req.body)
    user.register()
    if (user.errors.length) {
        res.send(user.errors)
    } else {
        res.send("Congrats there are no errors")
    }
}

exports.apiRegister = function (req, res) {
    let user = new User(req.body)
    user
      .register()
      .then(() => {
        res.json({
          username: user.data.username,
          email: user.data.email,
          password: user.data.password
        })
      })
      .catch(regErrors => {
        res.status(500).send(regErrors)
      })
}

exports.fetchUsers = function(req, res) {
    User.fetchUsers()
      .then(users => {
        res.json(users)
      })
      .catch(e => {
        res.json([])
      })
  }

exports.home = (req, res) => {
    res.render('home-guest')
}