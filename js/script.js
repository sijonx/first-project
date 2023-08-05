function openNav() {
    document.getElementById("sidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

document.getElementById('theme-button').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

