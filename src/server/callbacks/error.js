const { logError } = require('../../utils/logger')

module.exports = (session, error) => {
  logError(error)
  session.close()
}
