module.exports = (server) => {
  // GET - /test :: return test data
  server.get('/test', (req, res, nezt) => {
    if (req.query.helth) {
      res.send(200, { result: true, data: server });
    } else res.send(200, { result: true, data: null })
  })
}
