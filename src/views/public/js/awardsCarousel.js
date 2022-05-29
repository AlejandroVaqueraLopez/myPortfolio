//awards carousel
const awardsUl = document.querySelector("#awardsList");//ul
const btnAwardsUp = document.querySelector("#btnAwardsUp");//arrow up
const btnAwardsDown = document.querySelector("#btnAwardsDown");//arrow down

btnAwardsDown.style.opacity = 1;//default

let counterAwards = 0;

//down arrow
btnAwardsDown.addEventListener("click",()=>{
  const listLength = Array.from(awardsUl.children).length;

  if(counterAwards < (listLength - 1)){

    counterAwards++;
    btnAwardsUp.style.opacity = 1;
    btnAwardsDown.style.opacity = 1;

    Array.from(awardsUl.children).forEach((listItem)=>{
      listItem.style.transition = "opacity 0.1s ease-in";
      listItem.style.opacity = "0";
      setTimeout(()=>{
        listItem.style.transform = `translateY(-${(500 * counterAwards)}px)`;
      },100);
      setTimeout(()=>{
        listItem.style.opacity = "1";
      },200);
    });

  }else{//bottom limit
    btnAwardsUp.style.opacity = 1;
    btnAwardsDown.style.opacity = 0.5;
  }
});

//up arrow
btnAwardsUp.addEventListener("click",()=>{
  const listLength = Array.from(awardsUl.children).length;

  if(counterAwards > 0){

    counterAwards--;
    btnAwardsUp.style.opacity = 1;
    btnAwardsDown.style.opacity = 1;

    Array.from(awardsUl.children).forEach((listItem)=>{
      listItem.style.transition = "opacity 0.1s ease-in";
      listItem.style.opacity = "0";
      setTimeout(()=>{
        listItem.style.transform = `translateY(-${(500 * counterAwards)}px)`;
      },100);
      setTimeout(()=>{
        listItem.style.opacity = "1";
      },200);
    });
    
  }else{
    //console.log("Limit top");
    btnAwardsDown.style.opacity = 1;
    btnAwardsUp.style.opacity = 0.5;
  }
});

