const morgan = require('morgan')
morgan.token('body', (request) => {
    return JSON.stringify(request.body)
  })
  morgan.token('currentUserEmail', (request) => {
    return request.currentUser && request.currentUser.email || "anonymous"
  })
  const logger = morgan(':method :url :status :res[content-length] - :response-time ms :body (:currentUserEmail)')
 
  
  const attachCurrentuser = (request, response, next) => {
    const email = request.header("X-USER-EMAIL")
    if (email) request.currentUser = { email }
    next()
  }

  exports.logger = logger
  exports.attachCurrentuser = attachCurrentuser
  