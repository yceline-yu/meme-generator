
document.addEventListener("submit", function(event){
    event.preventDefault();
    document.getElementById("memeContent").appendChild(memes(inputs[0].value, inputs[1].value, inputs[2].value));
})


function memes(url, toT, boT){
    let memeDiv = document.createElement("div");
    let topTx = document.createElement("div");
    let botTx = document.createElement("div");
    let img = document.createElement('img');
    
    memeDiv.className = "wholeMeme";
    topTx.className = "topText";
    botTx.className = "botText";
    
    img.src = url;
    topTx.innerHTML = toT;
    botTx.innerHTML = boT;
    
    memeDiv.append(topTx);
    memeDiv.append(img);
    memeDiv.append(botTx);
    
    return memeDiv
    }


