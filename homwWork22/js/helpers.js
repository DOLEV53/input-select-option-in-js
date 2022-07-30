
export let ChangeColor = (firstInput,secondInput,thirdInput) => {

  let r = Math.floor(Math.random() * firstInput.value);
  let g = Math.floor(Math.random() * secondInput.value);
  let b = Math.floor(Math.random() * thirdInput.value);
  
return `rgb(${r},${g},${b})`;



};

export let countries = [

    "Israel",
    "Usa",
    "Brazil",
    "France",
    "Greece",
];