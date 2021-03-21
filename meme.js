
document.addEventListener("submit", function(event){
    event.preventDefault();
    let inputs = document.getElementById("initial-form").elements;
    let top = inputs[1].value;
    let bot = inputs[2].value;
    let imgs = inputs[0].value;
    memeContent.append(memes(imgs, top, bot));
})


function memes(url, toT, boT){
    let memeDiv = document.createElement("div");
    let topTx = document.createElement("div");
    let botTx = document.createElement("div");
    let img = document.createElement('img');
    
    let img.src = url;
    let topTx.innerHTML = toT;
    let botTx.innerHTML = boT;
    
    memeDiv.append(topTx);
    memeDiv.append(img);
    memeDiv.append(botTx);
    
    return memeDiv
    }


