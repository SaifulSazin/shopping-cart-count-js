//
//
//
// Function for the shopping card more dynamic and profesonal developer

function handleProductCount(product, isIncrease) {
    var productCount = document.getElementById(product + '-count');
    const caseCount = parseInt(productCount.value);
    let productNewCount = caseCount;

    if (isIncrease == true) {
        productNewCount = caseCount + 1;
    }
    if (isIncrease == false && caseCount > 0) {
        productNewCount = caseCount - 1;
    }
    productCount.value = productNewCount;

    if (product == 'case') {
        productTotal = productNewCount * 60;
    }
    if (product == 'phone') {
        productTotal = productNewCount * 1200;
    }

    document.getElementById(product + '-Total').innerText = '$' + productTotal;

    calculateTotal();
}


function calculateTotal() {

    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);

    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);

    // Total Price 
    const totalPrice = phoneCount * 1200 + caseCount + 60;

    document.getElementById('total-price').innerText = '$' + totalPrice;


    // count tax
    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('total-tax').innerText = '$' + tax;

    // grand Total 

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}




// function handlePhoneProductCount(isIncrease) {
//     var caseInput = document.getElementById('phone-count');
//     const caseCount = parseInt(caseInput.value);
//     let caseNewCount = caseCount;

//     if (isIncrease == true) {
//         caseNewCount = caseCount + 1;
//     }
//     if (isIncrease == false && caseCount > 0) {
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotalCount = caseNewCount * 1200;
//     document.getElementById('phone-Total').innerText = '$' + caseTotalCount;
// }



// Do it normal codding 

// // plush button handler  
// document.getElementById('case-increase').addEventListener('click', function() {
//     var caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;

//     const caseTotalCount = caseNewCount * 59;

//     // Take the value and set the value to price increase 
//     document.getElementById('caseTotal').innerText = '$' + caseTotalCount;
// });


// // Minus button handler  

// document.getElementById('case-decrease').addEventListener('click', function() {

//     var caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const caseTotalCount = caseNewCount * 59;
//     document.getElementById('caseTotal').innerText = '$' + caseTotalCount;

// });


// Do it with the function 

// // plush button handler  
// document.getElementById('case-increase').addEventListener('click', function() {
//     handleProductCount(true);
// });


// // Minus button handler  

// document.getElementById('case-decrease').addEventListener('click', function() {
//     handleProductCount(false);
// });


// Function and conditon for increase and descrease