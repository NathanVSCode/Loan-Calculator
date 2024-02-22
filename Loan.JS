function calculateLoan() {
    let loanAmountValue = document.getElementById
    ("loan-amount").value

    let interestRateValue = document.getElementById
    ("interest-rate").value
    
    let MonthsToPayValue = document.getElementById
    ("months-to-pay").value

    let interest = (loanAmountValue * interestRateValue * 0.01) / MonthsToPayValue

    let monthlyPayment = (loanAmountValue / MonthsToPayValue + interest).toFixed(2)
   
    let input = document.getElementsByClassName("input");
    let placeholderText = document.getElementById("placeholderText");

    if (loanAmountValue < 1 || MonthsToPayValue < 1 || interest < 1) {
        document.getElementById("payment").innerHTML = "That is not a valid number. Please enter a different number"
} else{
    document.getElementById("payment").innerHTML =
    `Monthly Payment: ${monthlyPayment}`
}   
}
