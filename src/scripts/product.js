(() => {
    const navbar = document.querySelector(".navigasi");
    const collapse = document.querySelector(".navbar-collapse");
    let collapseShow = false;

    window.onscroll = () => {
        if (collapseShow) return;

        if (scrollY > 40) {
            navbar.classList.remove("navigasi");
        } else {
            navbar.classList.add("navigasi");
        }
    }

    collapse.addEventListener('show.bs.collapse', () => {
        collapseShow = true;
        navbar.classList.remove("navigasi");
    });
    collapse.addEventListener('hide.bs.collapse', () => {
        collapseShow = false;
        if (scrollY < 40) navbar.classList.add("navigasi");
    });
})();