//proyects carousel
const proyectsUl = document.querySelector("#proyectsList");//ul
const btnProyectsUp = document.querySelector("#btnProyectsUp");//arrow up
const btnProyectsDown = document.querySelector("#btnProyectsDown");//arrow down

btnProyectsDown.style.opacity = 1;//by default

let counter = 0;

//down button
btnProyectsDown.addEventListener("click",()=>{
  const listLength = Array.from(proyectsUl.children).length;

  if(counter < (listLength - 1)){

    counter++;
    btnProyectsUp.style.opacity = 1;
    btnProyectsDown.style.opacity = 1;

    Array.from(proyectsUl.children).forEach((listItem)=>{
      listItem.style.transition = "opacity 0.1s ease-in";
      listItem.style.opacity = "0";
      setTimeout(()=>{
        listItem.style.transform = `translateY(-${(500 * counter)}px)`;
      },100);
      setTimeout(()=>{
        listItem.style.opacity = "1";
      },200);
    });

  }else{//bottom limit
    btnProyectsUp.style.opacity = 1;
    btnProyectsDown.style.opacity = 0.5;
  }
});

btnProyectsUp.addEventListener("click",()=>{
  const listLength = Array.from(proyectsUl.children).length;

  if(counter > 0){

    counter--;
    btnProyectsUp.style.opacity = 1;
    btnProyectsDown.style.opacity = 1;

    Array.from(proyectsUl.children).forEach((listItem)=>{
      listItem.style.transition = "opacity 0.1s ease-in";
      listItem.style.opacity = "0";
      setTimeout(()=>{
        listItem.style.transform = `translateY(-${(500 * counter)}px)`;
      },100);
      setTimeout(()=>{
        listItem.style.opacity = "1";
      },200);
    });
    
  }else{//top limit
    btnProyectsDown.style.opacity = 1;
    btnProyectsUp.style.opacity = 0.5;
  }
});

