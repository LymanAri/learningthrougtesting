//ES5
function validateField(val) {
    const name = "Anna";
    if (val == name) {
        console.log("Valid");
    } else {
        console.log("Not Valid");
    }
    console.log("Validate function", val);
}

function buttonClick() {
    console.log('You clicked me!');
}

function showTodaysDate() {
    alert(Date());
}

function overDiv() {
    alert('You are over me!');
}

function outDiv() {
    alert('Dont leave me!');
}

function onPageLoad() {
    console.log('Page is loaded');
}

window.validateField = validateField;
window.buttonClick = buttonClick;
window.showTodaysDate = showTodaysDate;
window.overDiv = overDiv;
window.outDiv = outDiv;
window.onPageLoad = onPageLoad;
//validateField();