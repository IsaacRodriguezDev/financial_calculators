
// created a constant variable for calculated buttons 
    const calculateButton = document.querySelector("#calculateButton")
    const resetButton = document.querySelector("#resetButton");
// created variable for the calculated label 
let result = document.querySelector("#calculatedResults")

// created a if statement if reset button is clicked clear the input boxes else calculate when calculate button is pressed
    
if(resetButton.addEventListener('click', function(){
    document.querySelector("#principal").value = ''
    document.querySelector("#interestRate").value = ''
    document.querySelector("#loanTerm").value = ''
      
     result.textContent = ''
})){

}else{
    // created a function to calculate the users input
    calculateButton.addEventListener("click", function calculate(){
    // created variables from the input fields and label
let principal = Number( document.querySelector("#principal").value)
let interestRate = Number(document.querySelector("#interestRate").value)
let loanTerm =  Number(document.querySelector('#loanTerm').value)

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
// the result will output onto the label on the browser
result.textContent = (`A $${principal} loan at ${interestRate}% for ${loanTerm} years would have a $${loanPaymementPerMonth.toFixed(2)}/month payment with a total interest of $${totalCostOfInterest.toFixed(2)}`)

})
  
}





















// window.onload = init
// function init(){
//     calculateButton.addEventListener('click', calculate)
// }
