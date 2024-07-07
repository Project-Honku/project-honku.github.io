(() => {
    window.onload = () => {
        const loading = document.querySelector("#loading");
        setTimeout(() => loading.classList.add("loaded"), 1000);
    }

    // Changing blobs over time
    const blobs = document.querySelector("#blobs");
    const blobsChilds = blobs.children;
    let blobTimer = setInterval(changeBlob, 1000 * 10);
    
    // Choose random blob at start
    let blobPos = Math.floor(Math.random() * blobsChilds.length);
    blobsChilds[blobPos].classList.add("show");

    blobs.onclick = () => {
        clearInterval(blobTimer);
        blobTimer = setInterval(changeBlob, 1000 * 10);
        changeBlob();
    };

    function changeBlob() {
        blobPos++;
        if (blobPos < blobsChilds.length) {
            blobsChilds[blobPos].classList.add("show");
            blobsChilds[blobPos - 1].classList.remove("show");
        } else {
            blobsChilds[blobPos - 1].classList.remove("show");
            blobPos = 0;
            blobsChilds[blobPos].classList.add("show");
        }
    }
})();