const SmppServer = require('../src/server')

describe('Server', () => {
  let server = null

  before(() => {
    server = new SmppServer()
  })
  
  it('should connect ok', (done) => {
    server.listen()
    done()
  })
})
