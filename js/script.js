function openNav() {
    document.getElementById("sidebar").style.width = "180px";
    document.getElementById("main").style.marginLeft = "180px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

document.getElementById('theme-button').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});