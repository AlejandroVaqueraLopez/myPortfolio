//experience carousel
const experienceUl = document.querySelector("#experienceList");//ul
const btnExperienceUp = document.querySelector("#btnExperienceUp");//arrow up
const btnExperienceDown = document.querySelector("#btnExperienceDown");//arrow down

btnExperienceDown.style.opacity = 1;//default

let counterExperience = 0;

btnExperienceDown.addEventListener("click",()=>{
  const listLength = Array.from(experienceUl.children).length;

  if(counterExperience < (listLength - 1)){

    counterExperience++;
    btnExperienceUp.style.opacity = 1;
    btnExperienceDown.style.opacity = 1;

    Array.from(experienceUl.children).forEach((listItem)=>{
      listItem.style.transition = "opacity 0.1s ease-in";
      listItem.style.opacity = "0";
      setTimeout(()=>{
        listItem.style.transform = `translateY(-${(500 * counterExperience)}px)`;
      },100);
      setTimeout(()=>{
        listItem.style.opacity = "1";
      },200);
    });

  }else{//bottom limit
    btnExperienceUp.style.opacity = 1;
    btnExperienceDown.style.opacity = 0.5;
  }
});

btnExperienceUp.addEventListener("click",()=>{
  const listLength = Array.from(experienceUl.children).length;

  if(counterExperience > 0){

    counterExperience--;
    btnExperienceUp.style.opacity = 1;
    btnExperienceDown.style.opacity = 1;

    Array.from(experienceUl.children).forEach((listItem)=>{
      listItem.style.transition = "opacity 0.1s ease-in";
      listItem.style.opacity = "0";
      setTimeout(()=>{
        listItem.style.transform = `translateY(-${(500 * counterExperience)}px)`;
      },100);
      setTimeout(()=>{
        listItem.style.opacity = "1";
      },200);
    });
    
  }else{//top limit
    btnExperienceDown.style.opacity = 1;
    btnExperienceUp.style.opacity = 0.5;
  }
});

