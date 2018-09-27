// elements
const result = document.querySelector('.result')
const calculateBtn = document.querySelector('.calcBtn')
const form = document.querySelector('.calculator')

// numbers
let totalTax = 0
let nettAnnualSalary = 0
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

  if ( grossAnnualSalary > tier2Start && grossAnnualSalary < tier3Start) {
    totalTax += (grossAnnualSalary - tier2Start) * tier2 + tier2Start * tier1
    calculateNettSalary()
  }

  if ( grossAnnualSalary < tier2Start ) {
    totalTax += grossAnnualSalary * tier1
    calculateNettSalary()
  }
}

function calculateNettSalary() {
  form.reset()
  let UglyNettAnnualSalary = grossAnnualSalary - totalTax;
  let UglyNettMonthlySalary = UglyNettAnnualSalary / 12
  
  nettAnnualSalary = Math.round(UglyNettAnnualSalary * 100) / 100
  nettMonthlySalary = Math.round(UglyNettMonthlySalary * 100) / 100
  displayResult()
}

function displayResult() {
  result.innerHTML =  `
  <p>Your annual nett salary is going to be around <span>${nettAnnualSalary}</span> kr.</p>
  <p>That's <span>${nettMonthlySalary}</span> kr. per month.</p>
  `
  result.classList.toggle('display')
}

calculateBtn.addEventListener('click', calculateTax)
