import express, { Express } from 'express'

const app: Express = express()

app.listen(23000, () => {
  console.log('[actors] server listening on port 23000')
})
