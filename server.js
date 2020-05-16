const app = require('./config/express')()
const port = app.get('port')

app.listen(port, () => {
  console.log(`Server is already running on port: ${port}`)
});