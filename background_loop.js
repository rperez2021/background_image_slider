var backgroundHolder = document.getElementsByClassName('background-layer-holder')[0];
var images = [
    './SliderImages/Slide/Slide/background_1_resized.jpg',
    './SliderImages/Slide/Slide/background_2_resized.jpg',
    './SliderImages/Slide/Slide/background_3_resized.jpg',
    './SliderImages/Slide/Slide/background_4_resized.jpg',
    './SliderImages/Slide/Slide/background_5_resized.jpg',
    './SliderImages/Slide/Slide/background_6_resized.jpg'
];
var i;


function appendBgPhotos() {
  for (i = 0; i < images.length; i++) {
  var div = document.createElement("div");
  backgroundHolder.appendChild(div)
  div.id = "bg_generated_id"+i
  div.className = "bg_generated"

  div.style.background = "url("+images[i]+")";
  console.log("div created")
  }
}

appendBgPhotos()