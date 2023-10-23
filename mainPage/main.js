let home = document.getElementById("home");
let middle = document.getElementById("middle");
let middleA = document.getElementById("middleA");
let news = document.getElementById("news");
home.addEventListener("mouseover", function () {
    middle.style.borderLeftColor = "green";
})
home.addEventListener("mouseout", function () {
    middle.style.borderLeftColor = "white";
})
news.addEventListener("mouseover", function () {
    middle.style.borderRightColor = "green";
})
news.addEventListener("mouseout", function () {
    middle.style.borderRightColor = "white";
})
middleA.addEventListener("mouseover", function () {
    middle.style.borderRightColor = "green";
    middle.style.borderLeftColor = "green";
})
middleA.addEventListener("mouseout", function () {
    middle.style.borderRightColor = "white";
    middle.style.borderLeftColor = "white";
})

let wrapper = document.getElementById("wrapper");
let usname = document.getElementById("usname");
let username = document.getElementById("username");
let textError = document.getElementById("textError");
let content = document.getElementById("content");
function formAppear() {
    wrapper.style.display = "flex";
    setTimeout(function () {
        wrapper.style.opacity = "1";
        content.style.marginTop = "13vw";
    }, 10)
    username.focus();
}
formAppear();
function userClick() {
    if (username.value == "") {
        usname.innerHTML = "Log in";
        wrapper.style.opacity = "0";
        content.style.marginTop = "0";
        setTimeout(function () {
            wrapper.style.display = "none";
        }, 400)
    }
    else {
        if (/[\u0590-\u05FF]/.test(username.value)) {
            textError.style.display = "none";
            usname.innerHTML = username.value;
            wrapper.style.opacity = "0";
            content.style.marginTop = "0";
            setTimeout(function () {
                wrapper.style.display = "none";
            }, 400)
        }
        else {
            textError.style.display = "block";
        }
    }
}

