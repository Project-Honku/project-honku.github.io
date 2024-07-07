(() => {
    window.onload = () => {
        const loading = document.querySelector("#loading");
        setTimeout(() => loading.classList.add("loaded"), 1000);
    }

    // Changing blobs over time
    const blobs = document.querySelector("#blobs");
    const blobsChilds = blobs.children;
    let blobPos = 0;

    
    let blobTimer = setInterval(changeBlob, 1000 * 10);
    blobs.onclick = () => {
        clearInterval(blobTimer);
        blobTimer = setInterval(changeBlob, 1000 * 10);
        changeBlob();
    };

    function changeBlob() {
        for (let i = 0; i < blobsChilds.length; i++) {
            if (blobsChilds[i].classList.contains("hidden")) {
                blobsChilds[i].classList.remove("hidden");
                blobPos++;
            }
        }

        if (blobPos >= blobsChilds.length) blobPos = 0;
        blobsChilds[blobPos].classList.add("hidden");
    }
})();