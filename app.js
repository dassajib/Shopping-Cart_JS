// increse decrese and cost function
function changeProductInput(product, price, isIncreasing) {
    const productInput = document.getElementById(product + "-number");
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productCost = document.getElementById(product + "-cost");
    productCost.innerText = productNumber * price;
    // Calculate Total
    calculateTotal();
}


function getInputValue(product) {
    const productInput = document.getElementById(product + "-number");
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const phoneCost = getInputValue('phone') * 1220;
    const caseCost = getInputValue('case') * 60;
    const subTotal = phoneCost + caseCost;
    console.log(subTotal);
    const tax = subTotal / 10;
    const totalAmount = subTotal + tax;

    // update html
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax-amount").innerText = tax;
    document.getElementById("total-price").innerText = totalAmount;
}

// handle increse event for phone
document.getElementById("phone-plus").addEventListener("click", function () {
    changeProductInput('phone', 1220, true);
});
// handle decrese event for phone
document.getElementById("phone-minus").addEventListener("click", function () {
    changeProductInput('phone', 1220, false);
});
// handle increse event for case
document.getElementById("case-plus").addEventListener("click", function () {
    changeProductInput('case', 60, true);
});
// handle increse event for case
document.getElementById("case-minus").addEventListener("click", function () {
    changeProductInput('case', 60, false);
});

