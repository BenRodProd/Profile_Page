let follower = false;
let sliderValue = 1;
let cirleX;
let cirleY;
// SAURON MIT MAUS STEUERN
document.addEventListener("mousemove", function (e) {
  let circle = document.getElementById("circle");
  let left = e.pageX;
  let top = e.pageY;
  setTimeout(() => {
    circle.style.left = left - 30 + "px";
    circle.style.top = top - 30 + "px";
    circleX = left - 30;
    circleY = left - 30;
  }, 1000);
});

// PUPILLE

document.addEventListener("mousemove", function (x) {
  let pupille = document.querySelector(".pupille");

  let left = x.pageX / 24;
  let top = x.pageY / 24;
  if (top < 10) {
    top = 10;
  }
  if (top > 60) {
    top = x.pageY / 48;
  }
  if (left > 60) {
    left = left = 60;
  }
  pupille.style.left = left + "%";
  pupille.style.top = top + "%";
  // PUPILLE BACKSNAP
});
// document.addEventListener("mousemove", () => {
//   // backsnap(3000);
// });
// function backsnap(timer) {
//   let pupille = document.querySelector(".pupille");
//   setTimeout(() => {
//     pupille.style.left = 30 + "%";
//     pupille.style.top = 30 + "%";
//   }, timer);
// }

const jf = document.getElementById("jugendforscht");
const fcW = document.getElementById("fccWeg");
const fccJ = document.getElementById("fccJS");
const cpWep = document.getElementById("cpWep");
const cpJS = document.getElementById("cpJS");
const BRde = document.getElementById("BenjaminRodensteinDe");
const BTde = document.getElementById("BenjoTrashDe");
const circler = document.querySelector(".circle");
const pupiller = document.querySelector(".pupille");
const aboutdiv = document.getElementById("about-text");
const pic = document.getElementById("pic");
const header = document.getElementById("header");
const contactData = document.getElementById("contactData");
followerCheck();
// SwitchFollower(sliderValue);
//TURN FOLLOWER ON / OFF
const followerButton = document.getElementById("follower");
followerButton.addEventListener("click", () => {
  if (follower) {
    follower = false;
    followerButton.innerText = "Follower Off";
  } else {
    follower = true;
    followerButton.innerText = "Follower On";
  }
  followerCheck();
});
function followerCheck() {
  if (follower == false) {
    circler.classList.remove("circleOn");
    circler.classList.add("circleOff");
    pupiller.classList.remove("pupilleOn");
    pupiller.classList.add("pupilleOff");
    pupiller.classList.remove("pacmanPupilleOn");
    circler.classList.remove("pacman");
    circler.classList.remove("sauron");
  } else if (follower && sliderValue == 1) {
    circler.classList.remove("circleOff");
    circler.classList.add("circleOn");
    pupiller.classList.remove("pupilleOff");
    pupiller.classList.add("pupilleOn");
    circler.classList.add("sauron");
  } else if (follower && sliderValue == 2) {
    circler.classList.remove("circleOff");
    circler.classList.add("circleOn");
    pupiller.classList.remove("pupilleOn");
    pupiller.classList.add("pupilleOff");
    circler.classList.remove("sauron");
    circler.classList.add("pacman");
    pupiller.classList.add("pacmanPupilleOn");
  } else if (follower && sliderValue == 3) {
    circler.classList.remove("circleOn");
    circler.classList.add("circleOff");
    pupiller.classList.remove("pupilleOn");
    pupiller.classList.add("pupilleOff");
    pupiller.classList.remove("pacmanPupilleOn");
    circler.classList.remove("pacman");
    circler.classList.remove("sauron");

    createWorm();
  }
}
function createWorm() {
  // const worm = document.createElement("img");
  circler.setAttribute("background-image", 'url("../html/worm.gif")');

  circler.classList.add("worm");
}
function removeWorm() {}
// STYLE SLIDE
const slider = document.getElementById("brightness");
const body = document.querySelector("body");
const title = document.querySelector(".title");
const nav = document.getElementById("navbar");
const contact = document.querySelector(".contactTitle");
const projects = document.querySelector(".projectTitle");
const projectlist = document.querySelector(".projectlist");
const techlist = document.getElementById("projectlist");
const pacmanPupille = document.querySelector(".pacmanPupilleOn");
const aboutText = document.getElementById("about-text");
const techStackList = document.getElementById("techstackslist");
const Image = document.getElementById("avatar");
const PicBack = document.getElementById("picscanner");
const ContactBack = document.getElementById("contactscanner");
const AboutBack = document.getElementById("aboutscanner");
const ProjectBack = document.getElementById("projectscanner");
const StackBack = document.getElementById("stackscanner");
if (sliderValue == 1) {
  ActivatePopupPics();
}
function SwitchFollower(x) {
  if (x == 1) {
    circler.classList.remove("pacman");
    circler.classList.add("sauron");
    pupiller.classList.remove("pacmanPupilleOn");
    pupiller.classList.add("pupilleOn");
    backimg.src = "avatar.jpg";
  } else if (x == 2) {
    circler.classList.remove("sauron");
    circler.classList.add("pacman");
    pupiller.classList.remove("pupilleOn");
    pupiller.classList.add("pupilleOff");
    pupiller.classList.add("pacmanPupilleOn");
  } else if (x == 3) {
    backimg.src = "wood2.jpg";
  }
}
function setTitle() {
  const TitleBack = document.querySelector('[data-js="backimg"]');
  if (sliderValue == 2) {
    TitleBack.setAttribute("background-color", "0,0,0,0");
  }
}
function ClassSort(SliderValue) {
  body.classList.remove("style1");
  body.classList.remove("style3");
  body.classList.remove("style4");
  body.classList.remove("style2");
  title.classList.remove("style1");
  title.classList.remove("style3");
  title.classList.remove("style2");
  title.classList.remove("style4");
  nav.classList.remove("style1");
  nav.classList.remove("style3");
  nav.classList.remove("style2");
  nav.classList.remove("style4");
  pic.classList.remove("style1b");
  pic.classList.remove("style3b");
  pic.classList.remove("style2b");
  pic.classList.remove("style4b");
  contact.classList.remove("style1b");
  contact.classList.remove("style3b");
  contact.classList.remove("style2b");
  contact.classList.remove("style4b");
  header.classList.remove("style1b");
  header.classList.remove("style3b");
  header.classList.remove("style2b");
  header.classList.remove("style4b");
  projectlist.classList.remove("style1b");
  projectlist.classList.remove("style3b");
  projectlist.classList.remove("style2b");
  projectlist.classList.remove("style4b");
  contactData.classList.remove("style1b");
  contactData.classList.remove("style3b");
  contactData.classList.remove("style2b");
  contactData.classList.remove("style4b");
  nav.classList.add(`style${SliderValue}`);
  techStackList.classList.remove("style1b");
  techStackList.classList.remove("style3b");
  techStackList.classList.remove("style2b");
  techStackList.classList.remove("style4b");
  aboutText.classList.remove("style1b");
  aboutText.classList.remove("style3b");
  aboutText.classList.remove("style2b");
  aboutText.classList.remove("style4b");
  nav.classList.add(`style${SliderValue}`);
  body.classList.add(`style${SliderValue}`);
  title.classList.add(`style${SliderValue}`);
  pic.classList.add(`style${SliderValue}b`);
  // header.classList.add(`style${SliderValue}b`);
  // contact.classList.add(`style${SliderValue}b`);
  projectlist.classList.add(`style${SliderValue}b`);
  contactData.classList.add(`style${SliderValue}b`);
  aboutText.classList.add(`style${SliderValue}b`);
  techStackList.classList.add(`style${SliderValue}b`);
}
slider.addEventListener("input", () => {
  sliderValue = slider.value;
  ClassSort(sliderValue);
  SwitchFollower(sliderValue);
  followerCheck();
  if (sliderValue == 1) {
    Image.src = "avatar.jpg";

    PicBack.classList.add("scanner");
    ContactBack.classList.add("scanner");
    AboutBack.classList.add("scanner");
    ProjectBack.classList.add("scanner");
    StackBack.classList.add("scanner");
    pic.classList.remove("woody");
    contactData.classList.remove("woody");
    aboutdiv.classList.remove("woody");
    projectlist.classList.remove("woody");
    techStackList.classList.remove("woody");
    pic.classList.remove("glass");
    contactData.classList.remove("glass");
    aboutdiv.classList.remove("glass");
    projectlist.classList.remove("glass");
    techStackList.classList.remove("glass");
    ActivatePopupPics();
  }
  if (sliderValue == 2) {
    PicBack.classList.remove("scanner");
    ContactBack.classList.remove("scanner");
    AboutBack.classList.remove("scanner");
    ProjectBack.classList.remove("scanner");
    StackBack.classList.remove("scanner");
    pic.classList.remove("woody");
    contactData.classList.remove("woody");
    aboutdiv.classList.remove("woody");
    projectlist.classList.remove("woody");
    techStackList.classList.remove("woody");
    pic.classList.add("glass");
    contactData.classList.add("glass");
    aboutdiv.classList.add("glass");
    projectlist.classList.add("glass");
    techStackList.classList.add("glass");
    createClouds();
    Image.src = "./avatarPixel.jpg";
    document.body.classList.add("cursor1");
    document.addEventListener("mousedown", () => {
      document.body.classList.remove("cursor1");
      document.body.classList.add("cursor2");
    });
    document.addEventListener("mouseup", () => {
      document.body.classList.remove("cursor2");
      document.body.classList.add("cursor1");
    });
  } else {
    hideClouds();
  }
  if (sliderValue == 3) {
    PicBack.classList.remove("scanner");
    ContactBack.classList.remove("scanner");
    AboutBack.classList.remove("scanner");
    ProjectBack.classList.remove("scanner");
    StackBack.classList.remove("scanner");
    pic.classList.add("woody");
    contactData.classList.add("woody");
    aboutdiv.classList.add("woody");
    projectlist.classList.add("woody");
    techStackList.classList.add("woody");
    Image.src = "./avatar_wood.jpg";
    hideClouds();
  }
  if (sliderValue === 4) {
    PicBack.classList.remove("scanner");
    ContactBack.classList.remove("scanner");
    AboutBack.classList.remove("scanner");
    ProjectBack.classList.remove("scanner");
    StackBack.classList.remove("scanner");
    pic.classList.remove("woody");
    contactData.classList.remove("woody");
    aboutdiv.classList.remove("woody");
    projectlist.classList.remove("woody");
    techStackList.classList.remove("woody");
  }
});
//
function hideClouds() {
  const cloud1 = document.querySelector(".cloud1");
  const cloud2 = document.querySelector(".cloud2");
  const cloud3 = document.querySelector(".cloud3");
  const cloud4 = document.querySelector(".cloud4");
  const cloud5 = document.querySelector(".cloud5");
  cloud1.setAttribute("hidden", "");
  cloud2.setAttribute("hidden", "");
  cloud3.setAttribute("hidden", "");
  cloud4.setAttribute("hidden", "");
  cloud5.setAttribute("hidden", "");
  // const AllClouds = document.querySelectorAll(".pixelCloud");
  // console.log(AllClouds);
  // for (i = 1; i < AllClouds.length - 1; i++) {
  //   console.log("cloud" + i);
  //   const currentCloud = document.querySelector(".cloud" + i);
  //   // currentCloud.classList.remove("cloud" + i);
  //   console.log("cloud" + i);
  // }
}
function createClouds() {
  const cloud1 = document.querySelector(".cloud1");
  const cloud2 = document.querySelector(".cloud2");
  const cloud3 = document.querySelector(".cloud3");
  const cloud4 = document.querySelector(".cloud4");
  const cloud5 = document.querySelector(".cloud5");
  cloud1.removeAttribute("hidden");
  cloud2.removeAttribute("hidden");
  cloud3.removeAttribute("hidden");
  cloud4.removeAttribute("hidden");
  cloud5.removeAttribute("hidden");
  // <div class ="pixelCloud" data-js="pixel-cloud">
  //         <img src = "../pixelCloud.png" class = "cloud" />
  //       </div>
  // slider.addEventListener("input", () => {

  // });
}
// ##############################Popup Bilder########################################
// JUGENDFORSCHT
function ActivatePopupPics() {
  jf.addEventListener("mouseover", (e) => {
    const jfimg = document.createElement("img");

    jfimg.setAttribute("id", "jfimg");
    jfimg.setAttribute("src", "../html/jugendforscht95jpg.jpg");
    aboutdiv.appendChild(jfimg);

    let left = e.layerX;
    let top = e.pageY;
    jfimg.style.left = left - 400 + "px";
    jfimg.style.top = top - 40 + "px";
    setTimeout(() => {
      aboutdiv.removeChild(jfimg);
    }, 300);
  });
  //WEBDESIGN
  fcW.addEventListener("mouseover", (e) => {
    const fccWeb = document.createElement("img");

    fccWeb.setAttribute("id", "fccWeb");
    fccWeb.setAttribute("src", "../html/freecodecampweb.jpg");
    aboutdiv.appendChild(fccWeb);
    let left = e.pageX;
    let top = e.pageY;
    fccWeb.style.left = 10 + "%";
    fccWeb.style.top = top - 300 + "px";
    setTimeout(() => {
      aboutdiv.removeChild(fccWeb);
    }, 300);
  });
  //JAVASCRIPT
  fccJ.addEventListener("mouseover", (e) => {
    const fcJimg = document.createElement("img");

    fcJimg.setAttribute("id", "fcJimg");
    fcJimg.setAttribute("src", "../html/freecodecampjs.jpg");
    aboutdiv.appendChild(fcJimg);
    let left = e.layerX;
    let top = e.pageY;
    fcJimg.style.left = left - 40 + "px";
    fcJimg.style.top = top - 300 + "px";
    setTimeout(() => {
      aboutdiv.removeChild(fcJimg);
    }, 300);
  });
  cpWep.addEventListener("mouseover", (e) => {
    const cpWepImg = document.createElement("img");

    cpWepImg.setAttribute("id", "cpWepImg");
    cpWepImg.setAttribute("src", "../html/certificate.png");
    aboutdiv.appendChild(cpWepImg);
    let left = e.layerX;
    let top = e.pageY;
    cpWepImg.style.left = left - 40 + "px";
    cpWepImg.style.top = top - 400 + "px";
    setTimeout(() => {
      aboutdiv.removeChild(cpWepImg);
    }, 300);
  });
  cpJS.addEventListener("mouseover", (e) => {
    const cpJSImg = document.createElement("img");

    cpJSImg.setAttribute("id", "cpJSImg");
    cpJSImg.setAttribute("src", "../html/certificate-1.png");
    aboutdiv.appendChild(cpJSImg);
    let left = e.layerX;
    let top = e.pageY;
    cpJSImg.style.left = left - 40 + "px";
    cpJSImg.style.top = top - 400 + "px";
    setTimeout(() => {
      aboutdiv.removeChild(cpJSImg);
    }, 300);
  });
  BRde.addEventListener("mouseover", (e) => {
    const BRdeImg = document.createElement("img");

    BRdeImg.setAttribute("id", "BRdeImg");
    BRdeImg.setAttribute("src", "../html/authorpage.png");
    aboutdiv.appendChild(BRdeImg);
    let left = e.layerX;
    let top = e.pageY;
    BRdeImg.style.left = left - 40 + "px";
    BRdeImg.style.top = top - 400 + "px";
    setTimeout(() => {
      aboutdiv.removeChild(BRdeImg);
    }, 300);
  });
  BTde.addEventListener("mouseover", (e) => {
    const BTdeImg = document.createElement("img");

    BTdeImg.setAttribute("id", "BTdeImg");
    BTdeImg.setAttribute("src", "../html/benjotrash.gif");
    aboutdiv.appendChild(BTdeImg);
    let left = e.layerX;
    let top = e.layerY;
    BTdeImg.style.left = left - 240 + "px";
    BTdeImg.style.top = top - 140 + "px";
    setTimeout(() => {
      aboutdiv.removeChild(BTdeImg);
    }, 300);
  });
}
