

//that is the nave bar contents function
const navbarEl = document.querySelector(".navbar");
     const bottomContainerEl = document.querySelector(".bottom-container");
    
     console.log(navbarEl.offsetHeight)

       console.log(bottomContainerEl.offsetTop);
     window.addEventListener("scroll", () =>{
        if(window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50){
            navbarEl.classList.add("active")
        }else{
            navbarEl.classList.remove("active")
        }
     })

  

     //the alert popup button
const containerEl = document.querySelector(".top-container");
const btnEl = document.querySelector(".btn");
const popupContainerEl =document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");
btnEl.addEventListener("click", ()=>{
  containerEl.classList.add("active");
  popupContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", ()=>{
  containerEl.classList.remove("active");
  popupContainerEl.classList.add("active");
});


   //that is the text runing rout
   let containerElem = document.querySelector(".container-ff")
   let careers = ["Designer", "Front-end Developer..!", "A Self-Taught.???"];
   let careerIndex = 0;
   
   let characterIndex = 0;
   
   updateText()
   
   function updateText(){
   characterIndex ++;
   containerElem.innerHTML = `
      <h1>I AM ${careers[careerIndex].slice(0, characterIndex)}</h1>`;
      if(characterIndex === careers[careerIndex].length){
       careerIndex++
       characterIndex = 0
      }
   
      if(careerIndex === careers.length){
       careerIndex = 0; 
      }
     setTimeout(updateText, 500);
   }  

//the window scroll button
let albutton= document.getElementById("alBtn")
			
window.onscroll = function(){scrollFunction()};
function scrollFunction(){
   if(document.body.scrollTop > 20 || 
   document.documentElement.scrollTop > 20){
     albutton.style.display = "block";
    }else{
       albutton.style.display = "none";
    }
}
 function topFunction(){
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }


    //the toggle text function
    const accordion = document.getElementsByClassName('content-container');

    for(i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener("click", function(){
            this.classList.toggle('active');
        })
    };



     //the second popup function bro
     let containEl = document.querySelector(".top-container");
     let btn2El = document.querySelector(".btn-2");
     let popupContainEl =document.querySelector(".popup-contain");
     let cleanIconEl = document.querySelector(".close-sticker");
 
     btn2El.addEventListener("click", ()=>{
       containEl.classList.add("active");
       popupContainEl.classList.remove("active");
     });
 
       cleanIconEl.addEventListener("click", ()=>{
       containEl.classList.remove("active");
       popupContainEl.classList.add("active");
     });
     



     //the form validation function bro
     //the name validation
     


 