export default class VendingMachine {
  constructor() {
    // status can be ["idle", "credited", "vending"]
      this.status = 'idle' || 'credited' || 'vending'
      this.credits = 0,
      this.changec= 0,
      this.selection = null,
      this.treats = {
        location: location,
        price: price,

      }

  }



  reset() {
    this.constructor()
  }
}
