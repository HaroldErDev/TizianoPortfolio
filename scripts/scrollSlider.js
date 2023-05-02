let scrollContainer = document.querySelector(".projects");
let beforeBtn = document.getElementById("arrow-left");
let nextBtn = document.getElementById("arrow-right");
let radio1 = document.getElementById("radio1");
let radio2 = document.getElementById("radio2");
let radio3 = document.getElementById("radio3");

var pos = 1;
radio1.style.color = "rgb(100, 60, 180)";

nextBtn.addEventListener("click", () => {
    if (pos == 3) {
        return;
    }

    pos += 1;

    if (pos == 2) {
        scrollContainer.scrollTo(1460, 0);

        radio1.style.color = "white";
        radio2.style.color = "rgb(100, 60, 180)";
    } else if (pos == 3) {
        scrollContainer.scrollTo(1460*2, 0);

        radio2.style.color = "white";
        radio3.style.color = "rgb(100, 60, 180)";
    }
});

beforeBtn.addEventListener("click", () => {
    if (pos == 1) {
        return;
    }
    
    pos -= 1;

    if (pos == 1) {
        scrollContainer.scrollTo(0, 0);

        radio1.style.color = "rgb(100, 60, 180)";
        radio2.style.color = "white";
    } else if (pos == 2) {
        scrollContainer.scrollTo(1460, 0);

        radio2.style.color = "rgb(100, 60, 180)";
        radio3.style.color = "white";
    }
});