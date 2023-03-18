const allImgContainer = document.getElementById("all-img-container");
const allSlides = allImgContainer.querySelectorAll("div");

allSlides.forEach((slide, index) => {
  slide.style.backgroundImage = `url('./assets/images/pexels${index + 1}.jpg')`;
});

const currentImgContainer = document.querySelector("#current-img-container");

// Place the 5th div inside of current image container and fill 5th checkmark

const defaultImg = document.getElementById("5").cloneNode(true);
currentImgContainer.append(defaultImg);

/* const defaultCheckmark = document.querySelector(".checkmark5");
defaultCheckmark.style.backgroundColor = "rgb(87, 241, 95)"; */

const defaultCheckmark = document.querySelector(".checkmark5");
defaultCheckmark.style.backgroundColor = "rgb(87, 241, 95)";

// Right arrow pressed

const rightArrow = document.querySelector(".right-arrow");
rightArrow.addEventListener("click", forwardSlideFunc);

function forwardSlideFunc() {
  let currentImgId = parseInt(
    currentImgContainer.children[2].getAttribute("id")
  );

  currentImgContainer.removeChild(currentImgContainer.children[2]);
  currentImgId++;

  if (currentImgId > 9) currentImgId = 1;

  const nextImg = document.getElementById(currentImgId).cloneNode(true);

  currentImgContainer.appendChild(nextImg);

  checkmarkSelector();
}

// Left arrow pressed

const leftArrow = document.querySelector(".left-arrow");
leftArrow.addEventListener("click", backwardSlideFunc);

function backwardSlideFunc() {
  let currentImgId = parseInt(
    currentImgContainer.children[2].getAttribute("id")
  );
  currentImgContainer.removeChild(currentImgContainer.children[2]);
  currentImgId--;

  if (currentImgId < 1) currentImgId = 9;
  const nextImg = document.getElementById(currentImgId).cloneNode(true);

  currentImgContainer.appendChild(nextImg);
  checkmarkSelector();
}

// Checkmark

const checkmarksContainer = document.querySelector(".checkmarks");
const allCheckmarks = Array.from(checkmarksContainer.querySelectorAll("div"));

function checkmarkSelector() {
  const checkmarksContainer = document.querySelector(".checkmarks");
  const allCheckmarks = Array.from(checkmarksContainer.querySelectorAll("div"));
  allCheckmarks.forEach((checkmark) => {
    checkmark.style.backgroundColor = "white";
  });

  let currentImgId = parseInt(
    currentImgContainer.children[2].getAttribute("id")
  );
  const currentCheckmark = document.querySelector(`.checkmark${currentImgId}`);
  currentCheckmark.style.backgroundColor = "rgb(87, 241, 95)";
}

allCheckmarks.forEach((checkmark, index) => {
  checkmark.addEventListener("click", () => {
    currentImgContainer.removeChild(currentImgContainer.children[2]);
    const addImg = document.getElementById(index + 1).cloneNode(true);
    currentImgContainer.appendChild(addImg);
    checkmarkSelector();
  });
});
