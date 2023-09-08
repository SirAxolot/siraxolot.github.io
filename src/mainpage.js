function sidebarClicked() {
    let bar = document.getElementById("sidebarcontainer");
    bar.style.transform = (bar.opened ? 'translateX(-100%)' : 'translateX(0)');
    bar.opened = !bar.opened;
}