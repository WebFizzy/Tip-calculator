// APP: Tip calculator

// billTotalInput
const billInput = document.getElementById('billTotalInput')
// tipInput
const tipInput = document.getElementById('tipInput')
//numberOfPeople
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
//perPersonTotal
const perPersonTotal = document.getElementById('perPersonTotal')
// get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText)

// ** Calculate the total bill per person
const calculateBill = () => {
  // get bill from user input & convert it to into number
  const bill = Number(billInput.value)

  // get tip from user input & convert it to into number
  const tipPercent = Number(tipInput.value) / 100

  // get total tip amount
  const tipAmount = bill * tipPercent

  // calculate the total (tip amount + bill)
  const total = tipAmount + bill

  // calculate the per person total (total divide by number of people)
  const perPerson = total / numberOfPeople

  // update the perPersonTotal on DOM & show it to user
  perPersonTotal.textContent = `$${perPerson.toFixed(2)}`  
}

// ** splits the bill between more people
const increasePeople = () => {
  // increment the amount of people
  numberOfPeople += 1

  // update the dom with the new number of peole
  numberOfPeopleDiv.innerText = numberOfPeople

  // calculate the bill based on the new number of people
  calculateBill()
}


// ** splits the bill between fewer people
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0)
  if (numberOfPeople <= 1) {
    alert('you are not allowed to go below 1')
    return
  }

  // decrement the amount of people
  numberOfPeople -= 1

  // update the dom with the new number of peole
  numberOfPeopleDiv.innerText = numberOfPeople

  // calculate the bill based on the new number of people
  calculateBill()
}