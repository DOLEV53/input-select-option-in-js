import { ChangeColor, countries } from "./helpers.js";

let elem = document.querySelector("#root");

let firstInput = document.createElement("input");
    firstInput.setAttribute("type", "number");
    firstInput.setAttribute("placeholder", "give value to: לצבע ההולם")
    firstInput.setAttribute("class", "class_write");

let secondInput = document.createElement("input");
    secondInput.setAttribute("type", "number");
    secondInput.setAttribute("placeholder", "give value to: לצבע ההולם");
    secondInput.setAttribute("class", "class_write");

let thirdInput = document.createElement("input");
    thirdInput.setAttribute("type", "number");
    thirdInput.setAttribute("placeholder", "give value to: לצבע ההולם");
    thirdInput.setAttribute("class", "class_write");

let myBtn = document.createElement("button");
    myBtn.setAttribute("id","id_button");
    myBtn.textContent = "click me";

    elem.appendChild(firstInput);
    elem.appendChild(secondInput);
    elem.appendChild(thirdInput);
    elem.appendChild(myBtn);

    //console.log(elem);

    

   let h_1 = document.getElementById("id_h1");
   myBtn.addEventListener("click", () => {
h_1.style.backgroundColor = ChangeColor(firstInput,secondInput,thirdInput);
h_1.style.color = ChangeColor(secondInput,thirdInput,firstInput);

firstInput.value = " ";
secondInput.value = " ";
thirdInput.value = " ";

           });


 

   // חלק שני של המשימה

let id_h2 = document.getElementById("id_h2");


   let selectCountries = document.createElement("select");
       selectCountries.setAttribute("id","mySelect");
       
   let option_1 = document.createElement("option");
       option_1.setAttribute("value",countries[0]);
       option_1.textContent = countries[0];
       
   let option_2 = document.createElement("option");
       option_2.setAttribute("value",countries[1]);
       option_2.textContent = countries[1];

   let option_3 = document.createElement("option");
       option_3.setAttribute("value",countries[2]);
       option_3.textContent = countries[2];

   let option_4 = document.createElement("option");
       option_4.setAttribute("value",countries[3]);
       option_4.textContent = countries[3];

   let option_5 = document.createElement("option");
       option_5.setAttribute("value",countries[4]); 
       option_5.textContent = countries[4];



    elem.appendChild(selectCountries);
      selectCountries.appendChild(option_1);
      selectCountries.appendChild(option_2);
      selectCountries.appendChild(option_3);
      selectCountries.appendChild(option_4);
      selectCountries.appendChild(option_5);
     
     
selectCountries.addEventListener("change", () => {

let x = document.getElementById("mySelect");
let i = x.selectedIndex;
id_h2.innerHTML = `<h2>I love -  ${x.options[i].text} </h2>

`;

})