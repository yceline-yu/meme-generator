
document.addEventListener("submit", function(event){
    event.preventDefault();
    document.getElementById("memeContent").appendChild(memes(document.getElementById('image').value, document.getElementById('top-text').value, document.getElementById('bottom-text').value));
})


function memes(link, toT, boT){
    let memeDiv = document.createElement("div");
        memeDiv.className = "wholeMeme";
    
    let topTx = document.createElement("div");
        topTx.className = "topText";
        topTx.innerHTML = toT;
    
    let botTx = document.createElement("div");
        botTx.className = "botText";
        botTx.innerHTML = boT;
    
    let img = document.createElement('img');
        img.src = link;
    


    
    memeDiv.append(topTx);
    memeDiv.append(img);
    memeDiv.append(botTx);
    
    document.addEventListener("click",function(event){
        let mD = document.querySelector(".wholeDiv")
        event.target.remove(mD);
        
    return memeDiv
    }


