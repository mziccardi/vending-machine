const Person = require('./person')
const Treat = require('./treats')



export default class VendingMachine {
  constructor(status, credits=0, change=0, selection,) {
      this.status = 'idle' || 'credited' || 'vending'
      this.credits = 0
      this.change= 0
      this.treats= {
        a1:[{name: 'twix', price: 100},{name: 'twix', price: 100}],
        a2:[{name: 'snickers', price: 100},{name: 'snickers', price: 100}],
        a3:[{name: 'butter-finger', price: 100},{name: 'butter-finger', price: 100}],
        a4:[{name: 'beef jerky', price: 100},{name: 'beef-jerky', price: 100}],
        b1:[{name: 'm&m', price: 100},{name: 'm&m', price: 100}],
        b2:[{name: 'skittles', price: 100},{name: 'skittles', price: 100}],
        b3:[{name: 'popcorn', price: 100},{name: 'popcorn', price: 100}],
        b4:[{name: 'gummybear', price: 100},{name: 'gummybear', price: 100}],
      }
      this.selection = null
  }


  insertCredit(person, amount) {
    person.takeMoney(amount)
    this.credits += amount
    if(this.credits>0){
      this.status = 'credited'
    }
  }

  // checkCredits(credits, selection){
  //   // let { credits, selection, } = this
  //   // this.insertCredit()
  //   console.log(credits);
  //   let prices = this.treats[selection][0].price
  //   if(this.credits < selection ){
  //     alert('you didnt put in enough credits')
  //   }else{
  //     //return snack here?
  //   }
  // }

  makeSelection(selection) {
    this.selection = selection
    let treatKeys = Object.keys(this.treats)
    let prices = this.treats[this.selection][0].price
    console.log(prices)
    if(this.credits < prices){
      alert('not enough')
    }
    if(treatKeys.includes(this.selection)){
      // make return candy function 
    }else{
      alert('make another choice')
    }
  }



  reset() {
    this.constructor()
  }
}
