const buttons = document.getElementsByClassName("button");
var currentActive = document.getElementsByClassName("Home-Active");

for (let i = 0; i < buttons.length; i++) {
    const element = buttons[i];

    element.addEventListener("click", function() {
        var current = document.getElementsByClassName("button-active");
        if (current.length > 0) {
            current[0].className = "button";
        }
        this.className = "button-active";
        enableDiv(this.textContent);
    });
}

function enableDiv(string) {
    let home = document.getElementsByClassName(string);
    if (home.length < 1) {
        home = document.getElementsByClassName(string + "-Active");
        if (home.length > 0) return;
    }
    currentActive[0].className = currentActive[0].className.replace("-Active", "");
    home[0].className = string + "-Active";
    currentActive = document.getElementsByClassName(string + "-Active");
}

buttons[0].className = "button-active";
