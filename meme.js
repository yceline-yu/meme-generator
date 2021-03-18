let subBut = document.querySelector("form");
subBut.addEventListener("submit", function(event){
    event.preventDefault();
    let inputs = document.getElementById("initial-form").elements;
    let top = inputs[1].value;
    let bot = inputs[2].value;
  alert(top);
})

