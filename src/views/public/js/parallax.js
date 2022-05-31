import {menuListAnim,changeMenuIconToggle} from "./header.js";/*(only 0px - 1000px) this closes or opens the menu*/

//little circle at the beggining of the header links
const menuIndicator = document.querySelector("#menuIndicator");

//Main containers
const profileContainer = document.querySelector("#profileContainer");
const proyectsContainer = document.querySelector("#proyectsContainer");
const experienceContainer = document.querySelector("#experienceContainer");
const scholarshipContainer = document.querySelector("#scholarshipContainer");
const awardsContainer = document.querySelector("#awardsContainer");
const contactContainer = document.querySelector("#contactContainer");

//menu opts
const optHome = document.querySelector("#optHome");
const optProfile = document.querySelector("#optProfile");
const optProyects = document.querySelector("#optProyects");
const optExperience = document.querySelector("#optExperience");
const optScholarship = document.querySelector("#optScholarship");
const optAwards = document.querySelector("#optAwards");
const optContact = document.querySelector("#optContact");

let containerTop = 0;

//Initialization of menu marker when page load
if(window.scrollY < (window.innerHeight)/2){
  optHome.children[0].style.fontFamily = "AlteHaasGroteskBold";
  optHome.children[0].style.fontWeight = "bold";
}

//when scroll
window.addEventListener("scroll",()=>{
  opacityAndParallaxFn(profileContainer,optProfile);
  opacityAndParallaxFn(proyectsContainer,optProyects);
  opacityAndParallaxFn(experienceContainer,optExperience);
  opacityAndParallaxFn(scholarshipContainer,optScholarship);
  opacityAndParallaxFn(awardsContainer,optAwards);
  opacityAndParallaxFn(contactContainer,optContact);
});

function opacityAndParallaxFn(element,linkElement){
  let elementPositionTop = element.getBoundingClientRect().top;//the dynamic position of element
  let startOpacity = (((window.innerHeight) * 5) / 6);// (5/6) of screen height
  let endOpacity = (window.innerHeight - 200);

  //only for home link 
  if(window.scrollY < (window.innerHeight)/2){
    optHome.children[0].style.fontFamily = "AlteHaasGroteskBold";
    optHome.children[0].style.fontWeight = "bold";

    //move the circle indicator to the current link
    menuIndicator.style.transform = `translateY(${optHome.offsetTop + (optHome.clientHeight / 2) - 4}px)`;//preset

  }else{
    optHome.children[0].style.fontFamily = "AlteHaasGroteskRegular";
  }

  //if element enters user view
  if(((elementPositionTop - startOpacity) < 0) && !((elementPositionTop + element.clientHeight - 80) < 0)){
    element.style.opacity = "1";
    linkElement.children[0].style.fontFamily = "AlteHaasGroteskBold";
    linkElement.children[0].style.fontWeight = "bold";

    //move the circle indicator to the current link
    menuIndicator.style.transform = `translateY(${linkElement.offsetTop + (linkElement.clientHeight / 2) - 4}px)`;//preset

  }else{
    //default else
    element.style.opacity = "0";
    linkElement.children[0].style.fontFamily = "AlteHaasGroteskRegular";
  }
  //if element is out of user view
  if((elementPositionTop + element.clientHeight - 80) < 0){
    element.style.opacity = "0";
    linkElement.children[0].style.fontFamily = "AlteHaasGroteskRegular";
  }
}

//parallax class variable
if(window.innerWidth >= 1000){//verifying if window-width is > than 1000 to apply parallax
  var rellax = new Rellax('.rellax',{
    speed:-5,
  })
}

//this function centers the scrolldown when click on link and IS PARALLAX
const centerFormula = (element,top,scrolled) => {
  //set the element on top of viewport
  //top = //original element top position (top:300vh)
  //scrolled = position scrolled since original position (to get element on top of viewport)
  let result = top + scrolled;

  //formula to get translated parallax height when scroll => 45(n/100); n=scrolled pixels
  const elementHeight = element.clientHeight;//element height
  const halfScreen = ((window.innerHeight / 2) - (element.clientHeight / 2));//half of viewport height
  const translationY = ((halfScreen/100) * 45 );//translationY from parallax effect
  result -= (halfScreen + translationY);//(to have the element at top of viewport) - (halfScreen + translatedY by parallax);
  //remember, you're scrolling here, not moving the element
  return result;
}

//this function centers the scrolldown when click on link and IS NO PARALLAX
const centerFormulaNoParallax = (element,top) => {
  //top = //original element top position (top:300vh)
  let result = top;

  //1100
  const halfScreen = ((window.innerHeight / 2));//half of viewport height
  result = (top - halfScreen) + (element.clientHeight / 2);
  return result;
}


//toggle of opacity when component is on view
const containers = document.querySelectorAll(".container");
const opacityFn = (className) => {
  containers.forEach((item) => {
    if(Array.from(item.classList).includes(className)){
      item.style.opacity = "1";
    }else{
      item.style.opacity = "0";
    }
  })
}

//links of header listeners
//HOME LINK/////////////////////////
optHome.addEventListener("click",(e)=>{
  e.preventDefault();

  //PARALLAX APPLYED (to go to home section is the same)
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
  //to close the menu (mobile and laptop)
  if(window.innerWidth < 1000){
    //menuAnimation
    changeMenuIconToggle();
    menuListAnim("100vw",true)
  };
})

//PROFILE LINK/////////////////////////
optProfile.addEventListener("click",(e)=>{
  e.preventDefault();

  //PARALLAX APPLYED
  if(window.innerWidth >= 1000){
    const top = window.innerHeight;//(top:105vh);
    const scrolled = 526;
    const containerTop = centerFormula(profileContainer,top,scrolled);
    opacityFn("profileContainer");
    window.scrollTo({
      top:`${containerTop}`,
      behavior:"smooth"
    });
  }
  //PARALLAX NOT APPLYED
  if(window.innerWidth < 1000){
    const top = (window.innerHeight);//(top:105vh);
    const containerTop = centerFormulaNoParallax(profileContainer,top)
    window.scrollTo({
      top:`${containerTop}`,
      behavior:"smooth"
    });
    //menuAnimation
    changeMenuIconToggle();
    menuListAnim("100vw",true)
  };
})

//PROYECTS LINK/////////////////////////
optProyects.addEventListener("click",(e)=>{
  e.preventDefault();

  //PARALLAX APPLYED
  const top = window.innerHeight * 3;//(top:300vh);
  const scrolled = 1500;
  const containerTop = centerFormula(proyectsContainer,top,scrolled);
  opacityFn("proyectsContainer");
  window.scrollTo({
    top:`${containerTop}`,
    behavior:"smooth"
  });

  //PARALLAX NOT APPLYED
  if(window.innerWidth < 1000){
    const top = (window.innerHeight * 3);//(top:300vh);
    const containerTop = centerFormulaNoParallax(proyectsContainer,top)
    window.scrollTo({
      top:`${containerTop}`,
      behavior:"smooth"
    });
    //menuAnimation
    changeMenuIconToggle();
    menuListAnim("100vw",true)
  };
})

//EXPERIENCE LINK/////////////////////////
optExperience.addEventListener("click",(e)=>{
  e.preventDefault();

  //PARALLAX APPLYED
  const top = window.innerHeight * 5;//(top:500vh);
  const scrolled = 2522;
  const containerTop = centerFormula(experienceContainer,top,scrolled);
  window.scrollTo({
    top:`${containerTop}`,
    behavior:"smooth"
  });

  //PARALLAX NOT APPLYED
  if(window.innerWidth < 1000){
    const top = (window.innerHeight * 5);//(top:500vh);
    const containerTop = centerFormulaNoParallax(experienceContainer,top)
    window.scrollTo({
      top:`${containerTop}`,
      behavior:"smooth"
    });
    //menuAnimation
    changeMenuIconToggle();
    menuListAnim("100vw",true)
  };
})

//SCHOLARSHIP LINK/////////////////////////
optScholarship.addEventListener("click",(e)=>{
  e.preventDefault();

  //PARALLAX APPLYED
  const top = window.innerHeight * 7;//(top:700vh);
  const scrolled = 3502;
  const containerTop = centerFormula(scholarshipContainer,top,scrolled);
  window.scrollTo({
    top:`${containerTop}`,
    behavior:"smooth"
  });

  //PARALLAX NOT APPLYED
  if(window.innerWidth < 1000){
    const top = (window.innerHeight * 7);//(top:700vh);
    const containerTop = centerFormulaNoParallax(scholarshipContainer,top)
    window.scrollTo({
      top:`${containerTop}`,
      behavior:"smooth"
    });
    //menuAnimation
    changeMenuIconToggle();
    menuListAnim("100vw",true)
  };
})

//AWARDS LINK/////////////////////////
optAwards.addEventListener("click",(e)=>{
  e.preventDefault();

  //PARALLAX APPLYED
  const top = window.innerHeight * 9;//(top:900vh);
  const scrolled = 4522;
  const containerTop = centerFormula(awardsContainer,top,scrolled);
  window.scrollTo({
    top:`${containerTop}`,
    behavior:"smooth"
  });

  //PARALLAX NOT APPLYED
  if(window.innerWidth < 1000){
    const top = (window.innerHeight * 9);//(top:900vh);
    const containerTop = centerFormulaNoParallax(awardsContainer,top)
    window.scrollTo({
      top:`${containerTop}`,
      behavior:"smooth"
    });
    //menuAnimation
    changeMenuIconToggle();
    menuListAnim("100vw",true)
  };
})

//CONTACT LINK/////////////////////////
optContact.addEventListener("click",(e)=>{
  e.preventDefault();

  //PARALLAX APPLYED
  const top = window.innerHeight * 11;//(top:1100vh);
  const scrolled = 5509;
  const containerTop = centerFormula(contactContainer,top,scrolled);
  window.scrollTo({
    top:`${containerTop}`,
    behavior:"smooth"
  });

  //PARALLAX NOT APPLYED
  if(window.innerWidth < 1000){
    const top = (window.innerHeight * 11);//(top:1100vh);
    const containerTop = centerFormulaNoParallax(contactContainer,top)
    window.scrollTo({
      top:`${containerTop}`,
      behavior:"smooth"
    });
    //menuAnimation
    changeMenuIconToggle();
    menuListAnim("100vw",true)
  };
})

