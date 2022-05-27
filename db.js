const mongodb = require("mongodb")

const connectionString = "mongodb+srv://edzus2:Wormix123@cluster0.9dpe2.mongodb.net/WDMarket-system?retryWrites=true&w=majority"

mongodb.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
  if (err) {
    console.log(err)
  }
  module.exports = client.db()
  const app = require("./app")
  app.listen(8000)
})