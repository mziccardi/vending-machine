export default class Person {
  constructor(initialCredits, creditSpent, currentCredit, selection) {
    this.initialCredits = 500
    this.creditSpent = 0
    this.currentCredit = this.initialCredits - this.creditSpent,
    this.selection = selection
  }

  takeMoney(amount){
    this.initialCredits -= amount
    return this.credits
  }

  
}
