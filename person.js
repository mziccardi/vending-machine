export default class Person {
  constructor(initialCredits, creditSpent, currentCredit) {
    this.initialCredits = 500,
    this.creditSpent = 0,
    this.currentCredit = this.initialCredits - this.creditSpent
  }

  takeMoney(amount){
    this.initialCredits -= amount
    return this.initialCredits
  }

}
