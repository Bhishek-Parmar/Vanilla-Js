// let billTotal = document.getElementById('billTotalInput');
// let tipInput = document.getElementById('tipInput') ;
// let person = document.getElementById('numberOfPeople');

const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')

const numberOfPeopleDiv = document.getElementById('numberOfPeople')

const perPersonTotalDiv = document.getElementById('money')

// let bt = Number(billTotal.value)
// let tp = Number(tipInput.innerText) / 100
// let p = Number(person.innerText)

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

let payment = document.getElementById("money");


const calculateBill = () => {
  
    const bill = Number(billInput.value)
    const tipPercent = Number(tipInput.value) / 100
    const tipAmount = bill * tipPercent
    const total = tipAmount + bill
    const perPersonTotal = total / numberOfPeople
    perPersonTotalDiv.innerText = `₹ ${perPersonTotal.toFixed(2)}`
} 


const increasePeople = () => {  
    numberOfPeople += 1

  numberOfPeopleDiv.innerText = numberOfPeople
    
    calculateBill();
}
const decreasePeople = () => {
    let people = document.getElementById("numberOfPeople")
    if (numberOfPeople > 1) {
        numberOfPeople -= 1
        people.innerHTML = numberOfPeople;
    }
    calculateBill();
}



// function calculate() {
//  let pay = (bt + (bt * tp)) / p;
//  payment.innerText = Number(pay);
//  console.log(pay)
// }
