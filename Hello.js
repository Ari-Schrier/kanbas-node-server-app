export default function Hello(app) {
    app.get('/hello', (req, res) => {
      res.send('Life is good!')
    })
    app.get('/secret', (req, res) => {
        res.send("My name is Chris Houlihan. This is my top secret room. Keep it between us, OK?")
    })
    app.get('/', (req, res) => {
      res.send('Welcome to Full Stack Development!')
    })
  }
  