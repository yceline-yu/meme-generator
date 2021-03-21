
document.addEventListener("submit", function(event){
    event.preventDefault();
    memeContent.appendChild(memes(inputs[0].value, inputs[1].value, inputs[2].value));
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


