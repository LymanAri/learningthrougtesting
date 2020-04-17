function applycss() {
    const olsList = document.getElementsByTagName("ol");
    olsList.forEach(element => {
        element.style.color = "blue";
        element.style.backgroundColor = "lightblue";    
    });
    
    const redTextElements = document.getElementsByClassName("red-text");
    redTextElements.forEach(element => {
        element.style.color = "red";
        element.style.fontSize = "20px";
    });
    const pWithId = document.getElementById("specialP");
    pWithId.style.fontFamily = "Times New Roman";
    pWithId.style.border = "2px dotted #000000";
}

function setHref() {
    const input = document.getElementsByName("hrefInputField")[0];
    const aTag = document.getElementById("linkToSomewhere");
    let value;
    if (input.value) {
        value = input.value; 
    } else {
        value = "https://google.com/";
    }
    aTag.href = value;
    aTag.target = "_blanc";
    console.log(input.value);
}

function changeTextAndStyles() {
    const button = document.getElementById("newText");
    button.innerHTML = "I am changed";
    button.style.padding = "10px";
    button.style.border = "1px solid black";
    button.style.backgroundColor = "yellow";
//     button.addEventListener("click" , () => {
//         alert("Ohh hello!");
//     });
}

window.changeTextAndStyles = changeTextAndStyles;
window.setHref = setHref;
window.applycss = applycss;