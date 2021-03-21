
document.addEventListener("submit", function(event){
    event.preventDefault();
    let inputs = document.getElementById("initial-form").elements;
    let top = inputs[1].value;
    let bot = inputs[2].value;
    let imgs = inputs[0].value;
    memeContent.appendChild(memes(imgs, top, bot));
})


function memes(imgs, top, bot){
    let memeDiv = document.createElement("div");
    let topTx = document.createElement("div");
    let botTx = document.createElement("div");
    let img = document.createElement('img');
    
    let img.src = imgs;
    let topTx.innerHTML = top;
    let botTx.innerHTML = bot;
    
    memeDiv.append(topTx);
    memeDiv.append(img);
    memeDiv.append(botTx);
    
    return memeDiv
    }


