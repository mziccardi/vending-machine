require('babel-core/register')({
  ignore: /node_modules\/(?!ProjectB)/
});

const assert = require('chai').assert
const VendingMachine = require('../vendingMachine').default
const Person = require('../person').default

describe('vending-machine', function() {
  const vendingMachine = new VendingMachine()
  const alex = new Person()

  // afterEach(function() {
  //   vendingMachine.reset();
  // });

  xit('remove credits from a persons wallet', () => {

    assert.equal(vendingMachine.status, 'idle')

    // Alex inserts a dollar into the vending machine
    vendingMachine.insertCredit(alex, 100)

    // Assert the current status of the vendingMachine is 'credited' after credits inserted
    assert.equal(vendingMachine.status, 'credited')
    // Assert the total number of credits is 100 cents ($1.00) after credits inserted
    assert.equal(vendingMachine.credits, 100)
    // Assert the total number of change is 0 cents ($0.00) before selection is made
    assert.equal(vendingMachine.change, 0)
  });

  it.only('should let a person make a selection',()=>{
    const vendingMachine = new VendingMachine()
    const alex = new Person()


    vendingMachine.insertCredit(alex, 100)
    vendingMachine.makeSelection('a1')

});


})
