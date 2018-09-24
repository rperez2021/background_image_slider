var backgroundHolder = document.getElementsByClassName('background-layer-holder')[0];
var images = [
    '/SliderImages/background_1_resized.jpg',
    '/SliderImages/background_2_resized.jpg',
    '/SliderImages/background_3_resized.jpg',
    '/SliderImages/background_4_resized.jpg',
    '/SliderImages/background_5_resized.jpg',
    '/SliderImages/background_6_resized.jpg'
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