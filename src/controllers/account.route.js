const accountController = require('./account.controller')

exports.default = {
  controller: accountController,
  routes: [
    { method: 'GET', url: '/account', handler: 'getAccount' },
    { method: 'POST', url: '/account', handler: 'postAccount' }
  ]
}
