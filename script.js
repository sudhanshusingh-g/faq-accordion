const accordionButtons = document.querySelectorAll(".accordion_button");
const accordionTexts = document.querySelectorAll(".faq_content");

console.log(accordionTexts);


accordionButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        button.innerHTML="<img src=\"./assets/images/icon-minus.svg\" alt=\"plus icon\" width=\"24\" height=\"24\">\n";
        accordionTexts.forEach((text)=>{
            text.style.display="block";
        })
    })
})