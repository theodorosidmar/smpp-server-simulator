const server = require('../../src/server')

describe('Server', () => {
  it('should connect ok', (done) => {
    server.listen(done)
  })

  after((done) => {
    server.close(done)
  })
})
