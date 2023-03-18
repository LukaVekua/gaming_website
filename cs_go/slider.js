let prev = document.getElementById("show-prev");
let next = document.getElementById("show-next");
let mtavari_surati = document.getElementById("main-picture");


let photosUrls = [];
photosUrls.push("suratebi/headshot.png");
photosUrls.push("suratebi/pic1.jpg");
photosUrls.push("suratebi/pic2.jpg");
photosUrls.push("suratebi/pic3.jpg");
photosUrls.push("suratebi/pic4.jpg");
photosUrls.push("suratebi/pic5.jpg");
photosUrls.push("suratebi/pic6.jpg");
photosUrls.push("suratebi/pic7.jpg");
photosUrls.push("suratebi/pic8.png");
photosUrls.push("suratebi/pic9.jpg");



let currentImgIndex = 0;
mtavari_surati.src = photosUrls[currentImgIndex];
prev.disabled = true;


const previousImg = () => {
  currentImgIndex--;
  mtavari_surati.src = photosUrls[currentImgIndex];
  next.disabled = false;

  if(currentImgIndex === 0){
    prev.disabled = true;
}

}

const nextImg = () =>{
    currentImgIndex++;
    mtavari_surati.src = photosUrls[currentImgIndex];
    prev.disabled = false;

    if(currentImgIndex === photosUrls.length - 1){
        next.disabled = true;
    }
}

prev.addEventListener('click',previousImg);
next.addEventListener('click',nextImg);