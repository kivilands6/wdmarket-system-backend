const Subtask = require('../models/Subtask')

exports.fetchSubtasks = function(req, res) {
    console.log("inside fetch")
    Subtask.fetchSubtasks()
      .then(subtasks => {
        res.json(subtasks)
      })
      .catch(e => {
        res.json([])
      })
}

exports.updateValue = function (req, res) {
    console.log(req.body)
    let subtask = new Subtask(req.body)
    subtask
      .updateValue()
      .then(() => {
        res.send("subtask access updated successfully")
        console.log("subtask value updated")
      })
      .catch(regErrors => {
          console.log("something went wrong")
        res.status(500).send(regErrors)
      })
}