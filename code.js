document.getElementById("loginButton").addEventListener("click", function() {
    let menu = document.getElementById("block_login");
    let arrow = document.getElementById("toUp");
    
    menu.classList.toggle("hidden");
    arrow.classList.toggle("arrow-up");
});
