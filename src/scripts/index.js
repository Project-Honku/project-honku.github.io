(() => {
    new LazyLoad({ restore_on_error: true });

    // FAQ sections
    const collapseable = document.querySelectorAll(".collapse-faq");
    [...collapseable].forEach(collapseEl => {
        const plus = collapseEl.parentElement.querySelector(".faq-plus");

        collapseEl.addEventListener('show.bs.collapse', event => {
            plus.classList.replace("bi-plus", "bi-dash");
            collapseAnother(event.target.id);
        });

        collapseEl.addEventListener('hide.bs.collapse', event => {
            plus.classList.replace("bi-dash", "bi-plus");
            collapseAnother(event.target.id);
        });
    });

    function collapseAnother(exceptID) {
        const collapseable = document.querySelector(`[id]:not(#${exceptID}).collapse.show`);
        if (collapseable) new bootstrap.Collapse(collapseable, { hide: true });
    }
})();