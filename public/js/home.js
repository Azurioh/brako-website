function opentab(event, tabname) {
    const tabContents = document.getElementsByClassName("tab-contents");
    const tabLinks = document.getElementsByClassName("tab-links");

    for (let tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for (let tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname)?.classList.add("active-tab");
}

function openMenu() {
    const sideMenu = document.getElementById("sidemenu");

    sideMenu.style.right = "0";
}

function closeMenu() {
    const sideMenu = document.getElementById("sidemenu");

    sideMenu.style.right = "-200px";
}

document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.getElementsByClassName("tab-links");
    const openMenuButton = document.getElementById("menu-button");
    const closeMenuButton = document.getElementById("menu-close");

    for (let tabLink of tabLinks) {
        tabLink.addEventListener('click', function(event) {
            const tabname = event.currentTarget.getAttribute('data-tab');
            opentab(event, tabname);
        });
    }
    openMenuButton.addEventListener('click', () => {
        openMenu();
    });
    closeMenuButton.addEventListener('click', () => {
        closeMenu();
    })
    window.scrollTo(0, 0);
    document.getElementById("header").style.opacity = 1;
});

$(document).ready(() => {
    $(window).scroll(() => {
        $('.fade').each(function (i) {
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > $(this).position().top + 200) {
                this.style.opacity = 1;
            } else {
                this.style.opacity = 0;
            }
        });
    });
});