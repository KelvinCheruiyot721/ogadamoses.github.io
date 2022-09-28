function activateGallery() {
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
    let mainImage = document.querySelector("#gallery-photo img");

    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function() {
            // Set  Clicked Image as Main Page
            let newImageSrc = thumbnail.dataset.largeVersion;
            mainImage.setAttribute("src", newImageSrc);
           
            // Change current Image
            document.querySelector(".current").classList.remove("current");
            thumbnail.parentNode.classList.add("current");
        });
    });
}