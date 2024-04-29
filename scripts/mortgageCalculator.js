
// created a constant variable for calculated buttons 
    const calculateButton = document.querySelector("#calculateButton")
// wired up the calculate function to the calculate button
    calculateButton.addEventListener("click", calculate)

// created a function to calculate the users input
function calculate(){
    // created variables from the input fields and label
let principal = Number( document.querySelector("#principal").value)
let interestRate = Number(document.querySelector("#interestRate").value)
let loanTerm =  Number(document.querySelector('#loanTerm').value)
let result = document.querySelector("#calculatedResults")

// created a variable for number of months in a year
let numberOfPaymentsPerYear= 12

//  created a variable converting a percent into a decimal 
let interestRateIntoDecimal = interestRate /100

// created the formula to calculate the loan payment per month
 let principalTimesInterestPerYear = principal *(interestRateIntoDecimal/numberOfPaymentsPerYear)
 let numberOfinterestPerTerm = 1-(1/ (1 + (interestRateIntoDecimal/numberOfPaymentsPerYear))** (numberOfPaymentsPerYear*(loanTerm)))
 let loanPaymementPerMonth = principalTimesInterestPerYear/numberOfinterestPerTerm

//  calculated how much total cost of interest
let totalOfAllMonthlyPay = loanTerm * numberOfPaymentsPerYear * loanPaymementPerMonth 
 let totalCostOfInterest = totalOfAllMonthlyPay - principal
// the result will out put onto the label on the window
result.textContent = (`A $${principal} loan at ${interestRate}% for ${loanTerm} years would have a $${loanPaymementPerMonth.toFixed(2)}/month payment with a total interest of $${totalCostOfInterest.toFixed(2)}`)
 
}
  




















// window.onload = init
// function init(){
//     calculateButton.addEventListener('click', calculate)
// }
