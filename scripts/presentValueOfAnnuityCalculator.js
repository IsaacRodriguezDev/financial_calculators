// created a constant variable for calculated buttons
const calculateButton = document.querySelector("#calculateButton");

// called the button variable and gave it a function to run when clicked
calculateButton.addEventListener("click", function () {
  // created variables from the input fields and label
  let paymentAmount = Number(document.querySelector("#deposit").value);
  let interestRate = Number(document.querySelector("#interestRate").value);
  let years = Number(document.querySelector("#termYears").value);
  let result = document.querySelector("#calculatedResults");

  let monthly = 12

  // dividing interest by monthly * 100
  let interest = interestRate/(monthly*100)
  console.log(interest)
// calculating number of months in specific amount of years
    let numberOfYearsTimesMonths = years * monthly

    // calculating using the formula 1-(1+interest)^-numberofyears then getting divided by the interest
    let calculation = (1+interest)**-numberOfYearsTimesMonths
    let secondCalculation = 1 - calculation
    let futureValueOfannuityAmount = secondCalculation / interest
    console.log(futureValueOfannuityAmount)

    // regular payment 
    let regularPayment = paymentAmount / futureValueOfannuityAmount
    console.log(regularPayment)
    // interest paid 
    let interestPaid = (regularPayment * numberOfYearsTimesMonths) - paymentAmount
    console.log(interestPaid)
    // this is how much you'd get paid 
    let futurePay = futureValueOfannuityAmount * paymentAmount
console.log(futurePay)

    
  // result will output on the browser
  result.textContent = (`To fund an annuity that pays $${paymentAmount} monthly for ${years} years and earns an expected ${interestRate}% interest, you would need to invest $${futurePay.toFixed(2)}`)
});

