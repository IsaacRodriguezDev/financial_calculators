// created a constant variable for calculated buttons
const calculateButton = document.querySelector("#calculateButton");

// called the button variable and gave it a function to run when clicked
calculateButton.addEventListener("click", function () {
  // created variables from the input fields and label
  let deposit = Number(document.querySelector("#deposit").value);
  let interestRate = Number(document.querySelector("#interestRate").value);
  let termYears = Number(document.querySelector("#termYears").value);
  let result = document.querySelector("#calculatedResults");
  let compound = Number(document.querySelector('#compound').value)
  
  // converted percent into decimal
  let interest = interestRate / 100;

  // created a formula to calculate the future value and assiged it to futreValueFactor variable
  let futureValueFactor = deposit * (1 + interest/compound) ** (termYears*compound)

//   calculating how much user earned in interest
    let interestEarned = futureValueFactor - deposit
  // result will output on the browser
  result.textContent = (`If you deposited $${deposit} in a CD that earns ${interestRate}% interest and matures in ${termYears} years, your CD's ending balance will be $${futureValueFactor.toFixed(2)} and you would have earned $${interestEarned.toFixed(2)} in interest`);
  console.log(futureValueFactor);
});


