const services = require('service-server')
const accountController = {
  async getAccount (ctx) {
    ctx.body = 'ok post get account'
  }, 
  async postAccount (ctx) {
    const { form } = ctx.request.body
    const account = await services.account.createAccount(form)
    // console.log(form)
    // const account = await ctx.db.models.account.create(form)
    ctx.body = account
  }
}

module.exports = accountController
