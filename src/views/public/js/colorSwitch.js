//here we toggle the page background color
const switchBallContainer = document.querySelector("#switchBallContainer");
const switchBall= document.querySelector("#switchBall");
const particlesBack = document.querySelector("#particles-js");

let switchToggle = false;

switchBallContainer.addEventListener("click",()=>{
  switchToggle = !switchToggle;
  if(switchToggle == true){
    const switchBallX = (switchBallContainer.clientWidth - ((switchBall.offsetLeft * 2) + switchBall.clientWidth));
    switchBall.style.background = "#fff";
    switchBall.style.transform = `translateX(${switchBallX}px)`;
    particlesBack.style.background = "#000";
  }else{
    switchBall.style.background = "#aa00ff";
    switchBall.style.transform = `translateX(0px)`;
    particlesBack.style.background = "linear-gradient(#f64f59, #fc00ff,#aa00ff, #12c2e9,#c471ed)";
  }
})
