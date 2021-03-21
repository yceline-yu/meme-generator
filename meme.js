
document.addEventListener("submit", function(event){
    event.preventDefault();
    document.getElementById("memeContent").appendChild(memes(document.getElementById('image').value, document.getElementById('top-text').value, document.getElementById('bottom-text').value));
})


function memes(link, toT, boT){
    let memeDiv = document.createElement("div");
        memeDiv.className = "wholeMeme";
        memeDiv.id = "meme1"
    
    let topTx = document.createElement("div");
        topTx.className = "topText";
        topTx.innerHTML = toT;
    
    let botTx = document.createElement("div");
        botTx.className = "botText";
        botTx.innerHTML = boT;
    
    let img = document.createElement('img');
        img.src = link;

    let butt = document.createElement("button")
        butt.innerText = "x";
        butt.className = "butts";
        butt.addEventListener("click", function(event){
            topTx.remove();
            botTx.remove();
            img.remove();
            butt.remove();
        })

    memeDiv.append(topTx);
    memeDiv.append(img);
    memeDiv.append(botTx);
    memeDiv.append(butt);
        
    return memeDiv
    }


