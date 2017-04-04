class Person {
  constructor(initialCredits, creditSpent, currentCredit) {
    this.initialCredits = 500,
    this.creditSpent = 0,
    this.currentCredit = this.initialCredits - this.creditSpent
  }

  insertCredit(amount){
    this.initialCredits -  this.initialCredits - amount
    return amount
  }
}
