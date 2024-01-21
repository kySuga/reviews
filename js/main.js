// local reviews data
// normally would come through AJAX requests by an HTTP request
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    title: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    info: 'I\'m baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry',
  },
  {
    id: 2,
    name: 'anna johnson',
    title: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    info: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    title: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    info: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    title: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    info: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.',
  },
];

// select (dynamic/to-be-updated) elements
const img = document.getElementById("img__person");
const author = document.getElementById("author");
const title = document.getElementById("title");
const info = document.getElementById("info");
const btnPrev = document.querySelector(".btn__prev-btn");
const btnNext = document.querySelector(".btn__next-btn");
const btnRandom = document.querySelector(".btn__random-btn");

// set starting review (0 based index)
let currentReview = 0;

// load initial review
window.addEventListener("DOMContentLoaded", function() {
  getReviewer(currentReview);
});

// shows reviewer based on review
// argument `reviewer` is not necessary since `currentReview` is a global variable
function getReviewer(reviewer) {
  // variable cleans up grabbing property from object
  // otherwise each would be written as for example:
  // img.src = reviews[reviewer].img;
  const review = reviews[reviewer];

  img.src = review.img;
  img.alt = review.name;
  author.textContent = review.name;
  title.textContent = review.title;
  info.textContent = review.info;
};

// show next review
btnNext.addEventListener("click", function() {
  currentReview++;
  if (currentReview > reviews.length - 1) {
    currentReview = 0;
  }
  getReviewer(currentReview);
});

// show previous review
btnPrev.addEventListener("click", function() {
  currentReview--;
  if (currentReview < 0) {
    currentReview = reviews.length - 1;
  }
  getReviewer(currentReview);
});

// show random review
btnRandom.addEventListener("click", function() {
  currentReview = Math.floor(Math.random() * reviews.length);
  console.log(currentReview);
  getReviewer(currentReview);
});
