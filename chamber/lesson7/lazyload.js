//find all images in document
const imagesToLoad = document.querySelectorAll('[data-src]');

//replace all the src images with data-src images
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

//img observer waits until the user scrolls to load the image
const imgOptions = { threshold: 0.5 };

const imgObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      loadImages(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, imgOptions);

imagesToLoad.forEach((image) => {
  imgObserver.observe(image);
});
