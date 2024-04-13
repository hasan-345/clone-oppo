  
function hid_1(){
    var hover1 =document.getElementsByClassName("hoverable")[0];
    hover1.classList.toggle("hov1"); 
}
function hid_2(){
    var hover2 = document.getElementsByClassName("hoverable_2")[0];
    hover2.classList.toggle("hov2")
}
function hid_3(){
    var hover3 = document.getElementsByClassName("hoverable_3")[0];
    hover3.classList.toggle("hov3");
}

function scroll(){
    window.scrollTo(0,0);
}



function menushow(){
    var menu = document.getElementsByClassName("menu")[0];
    menu.classList.toggle("showcasemenu");
    var navbar = document.getElementsByClassName("nav_bar")[0];
    var navb = document.getElementsByClassName("logo_m")[0];
    navb.classList.toggle("activet");
    navbar.classList.toggle("activ");

}


function pos_1(){
    var smart =  document.getElementsByClassName("s1")[0]
    smart.classList.toggle("posit_1");
}
function pos_2(){
var smar = document.getElementsByClassName("s2")[0];
smar.classList.toggle("posit_2");
}
function pos_3(){
var sm = document.getElementsByClassName("s3")[0];
sm.classList.toggle("posit_3");
}
function pos_4(){
    var s=  document.getElementsByClassName("s4")[0]
    s.classList.toggle("posit_4");
}
function pos_5(){
  var e=  document.getElementsByClassName("s5")[0]
    e.classList.toggle("posit_5");
}




const bigTag = document.getElementsByClassName("big_tag")[0];
 const arrow = document.querySelectorAll(".i i");
 arrow.forEach(btn =>{
     btn.addEventListener("click",() =>{
       console.log(btn.id);
     })
 })
let isDragging = false, startX, startScrollLeft ;
const dragging = (e) => {
    if(!isDragging) return;
    bigTag.scrollLeft= startScrollLeft - (e.pageX - startX) ;
 }

 const dragStart = (e) => {
    isDragging = true;
    bigTag.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = bigTag.scrollLeft;
 }
 const dragStop = () => {
    isDragging = false;
    bigTag.classList.remove("dragging")
 }

bigTag.addEventListener("mousemove",dragging);
bigTag.addEventListener("mousedown",dragStart);
document.addEventListener("mouseup",dragStop);

 const loader = document.getElementsByClassName("inloader")[0];
window.addEventListener("load",()=>{
       loader.style.display="none";
});
 
var internet = document.getElementsByClassName("nointernet")[0];
 window.addEventListener("online",()=>{
     internet.style.display="none";  

 });
 window.addEventListener("offline",()=>{
    internet.style.display="block";  

});