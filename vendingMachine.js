const Person = require('./person').default

export default class VendingMachine {
  constructor(status, credits=0, change=0, selection,) {
    // status can be ["idle", "credited", "vending"]
      this.status = 'idle' || 'credited' || 'vending'
      this.credits = 0
      this.change= 0
      this.selection = null
  }
  insertCredit(person, amount) {
    //take money from person's wallet
    person.takeMoney(amount)
    //add money to machine's credits
    this.credits += amount
  }



  reset() {
    this.constructor()
  }
}
