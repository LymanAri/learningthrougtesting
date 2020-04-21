const addNodeBtn = document.getElementById("addBtn");
const removeNodeBtn = document.getElementById("deleteBtn");

addNodeBtn.addEventListener("click", () => {
    addNodeToUl();
});
removeNodeBtn.addEventListener("click", () => {
    removeNodeFromUl();
});

function addNodeToUl() {
    const ulElement = document.getElementsByTagName("ul")[0];
    const inputElement = document.getElementById("textForLi");
    console.log(inputElement);
    const newLi = document.createElement("li");
    const text = document.createTextNode(inputElement.value);
    if(inputElement.value) {
        ulElement.appendChild(newLi);
        newLi.appendChild(text);
        inputElement.value = "";
    }
    
/*     const beforeText = document.createTextNode("[important]");
    const firstLi = ulElement.getElementsByTagName("li")[0];
    ulElement.insertBefore(beforeText, firstLi); */
}

function removeNodeFromUl() {
    const ulElement = document.getElementsByTagName("ul")[0];
    const listOfLi = ulElement.getElementsByTagName("li");
    const index = listOfLi.length - 1;
    if(index >= 0) {
        ulElement.removeChild(listOfLi[index]);
        /* listOfLi[index].remove(); */
    }
}