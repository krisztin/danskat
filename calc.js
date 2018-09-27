// elements
const result = document.querySelector('.result')
const calculateBtn = document.querySelector('.calcBtn')

// numbers
let totalTax = 0
let nettAnualSalary = 0
let nettMonthlySalary = 0
let grossAnnualSalary = 0

const tier3Start = 521304
const tier2Start = 48913

const tier1 = 0.08
const tier2 = 0.41
const tier3 = 0.55

function calculateTax(e) {
  e.preventDefault()
  
  grossAnnualSalary = document.querySelector('[name=salaryYearly]').value

  if ( grossAnnualSalary - tier3Start >= 0) {
    totalTax += (grossAnnualSalary - tier3Start) * tier3 + (tier3Start - tier2Start) * tier2 + tier2Start * tier1
    calculateNettSalary()
  }

  if ( grossAnnualSalary > tier2Start && salary < tier3Start) {
    totalTax += (grossAnnualSalary - tier2Start) * tier2 + tier2Start * tier1
    calculateNettSalary()
  }

  if ( grossAnnualSalary < tier2Start ) {
    totalTax += grossAnnualSalary * tier1
    calculateNettSalary()
  }
}

function calculateNettSalary() {
  nettAnualSalary = grossAnnualSalary - totalTax
  nettMonthlySalary = nettAnualSalary / 12
  displayResult()
}

function displayResult() {
  result.innerHTML =  `
  <p>Your annual nett salary is going to be <span>${nettAnualSalary}</span> kr.</p>
  <p>That's <span>${nettMonthlySalary}</span> kr. per month.</p>
  `
  result.classList.toggle('display')
}

calculateBtn.addEventListener('click', calculateTax)
