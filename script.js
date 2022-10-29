let selection = document.querySelector("select");
let result = document.querySelector("h2");

selection.onchange = () => {
    result.innerText = selection.options[selection.selectedIndex].text;
};