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


function handleProductCount(isIncrease) {
    var caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    let caseNewCount = caseCount;

    if (isIncrease == true) {
        caseNewCount = caseCount + 1;
    }
    if (isIncrease == false && caseCount > 0) {
        caseNewCount = caseCount - 1;
    }
    caseInput.value = caseNewCount;
    const caseTotalCount = caseNewCount * 59;
    document.getElementById('caseTotal').innerText = '$' + caseTotalCount;
}