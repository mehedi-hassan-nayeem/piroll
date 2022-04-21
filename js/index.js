//
//
//
//
//
// scroll script
window.addEventListener("scroll", function () {
    var stickyBar = document.getElementById("stickybar");
    stickyBar.classList.toggle("sticky", window.scrollY > 0);
});

//
//
//
//
//
// onclick script
const menuBar = document.getElementById("menu-bar");
const menu = document.getElementById("menu");

menuBar.addEventListener("click", () => {
    if (menu.className === "hidden") {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
});
