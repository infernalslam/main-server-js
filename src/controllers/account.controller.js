const accountController = {
  async getAccount (ctx) {
    ctx.body = 'ok post get account'
  }, 
  async postAccount (ctx) {
    ctx.body = 'ok post'
  }
}

module.exports = accountController
