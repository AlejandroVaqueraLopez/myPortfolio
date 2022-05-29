const menuIcon = document.querySelector("#menuIcon");//burger icon
const menuList = document.querySelector("#menuList");//ul

const menuBarTop = document.querySelector("#menuBarTop");//the layers of burger menu
const menuBarMid = document.querySelector("#menuBarMid");
const menuBarBot = document.querySelector("#menuBarBot");

//a toggle to know the status of the header (only max-width:1000px)
let menuIconToggle = false;
const list = menuList.children;//htmlCollection of li

const menuListAnim = (valueX,close) => {//valueX = translationX, close = (is closed or open?)
  //close can be true or false if we want to close the ul
  //this is the slither animation of the listItems
  setTimeout(()=>{
    list[0].style.transform = `translateX(${valueX})`;
  },50)
  setTimeout(()=>{
    list[1].style.transform = `translateX(${valueX})`;
  },100)
  setTimeout(()=>{
    list[2].style.transform = `translateX(${valueX})`;
  },200)
  setTimeout(()=>{
    list[3].style.transform = `translateX(${valueX})`;
  },250)
  setTimeout(()=>{
    list[4].style.transform = `translateX(${valueX})`;
  },300)
  setTimeout(()=>{
    list[5].style.transform = `translateX(${valueX})`;
  },350)
  setTimeout(()=>{
    list[6].style.transform = `translateX(${valueX})`;
  },400)

  if(close == true){
    //we want to close here
    setTimeout(()=>{
      menuList.style.display = "none";
    },600);
  }else{
    //we want to open here
  }

}

//animation of burguer icon menu
const changeMenuIconToggle = () => {
  menuIconToggle = !menuIconToggle;
  if(menuIconToggle){
    menuBarTop.style.transform = "translateY(14px) rotate(-45deg)";
    menuBarMid.style.opacity = "0";
    menuBarBot.style.transform = "translateY(-14px) rotate(45deg)";
    menuList.style.display = "flex";

    menuListAnim("0px",false);//here we call to open the menu

  }else{
    menuBarTop.style.transform = "translateY(0px) rotate(0deg)";
    menuBarMid.style.opacity = "1";
    menuBarBot.style.transform = "translateY(0px) rotate(0deg)";

    menuListAnim("100vw",true);//here we call to close the menu
  }
}

//reactive menu icon component
menuIcon.addEventListener("click",()=>{
  changeMenuIconToggle();
});

export {menuListAnim,changeMenuIconToggle};
  
