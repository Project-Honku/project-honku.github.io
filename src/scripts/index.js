(() => {
    window.onload = () => {
        const loading = document.querySelector("#loading");
        setTimeout(() => loading.classList.add("loaded"), 1000);
    }

    // Changing blobs over time
    const blobs = document.querySelectorAll(".faded");
    let blobTimer = setInterval(changeBlob, 1000 * 10);
    
    // Choose random blob at start
    let blobPos = Math.floor(Math.random() * blobs.length);
    blobs[blobPos].classList.add("show");

    blobs[0].parentElement.onclick = () => {
        clearInterval(blobTimer);
        blobTimer = setInterval(changeBlob, 1000 * 10);
        changeBlob();
    };

    // FAQ sections
    const collapseable = document.querySelectorAll(".collapse");
    [...collapseable].forEach(collapseEl => {
        const plus = collapseEl.parentElement.querySelector(".faq-plus");

        collapseEl.addEventListener('show.bs.collapse', event => {
            plus.classList.replace("bi-plus", "bi-dash");
        });

        collapseEl.addEventListener('hide.bs.collapse', event => {
            plus.classList.replace("bi-dash", "bi-plus");
        });
    });

    function changeBlob() {
        blobPos++;
        if (blobPos < blobs.length) {
            blobs[blobPos].classList.add("show");
            blobs[blobPos - 1].classList.remove("show");
        } else {
            blobs[blobPos - 1].classList.remove("show");
            blobPos = 0;
            blobs[blobPos].classList.add("show");
        }
    }
})();