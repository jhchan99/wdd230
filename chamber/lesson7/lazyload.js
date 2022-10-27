//find all images in document
const imagesToLoad = document.querySelectorAll("[data-src]");

//replace all the src images with data-src images
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
      image.removeAttribute("data-src");
    };
  };

imagesToLoad.forEach((img) => {
    loadImages(img);
});
  

//img observer waits until the user scrolls to load the image
const imgOptions = {};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});




