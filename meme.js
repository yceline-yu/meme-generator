document.addEventListener("submit", function(event){
    event.preventDefault();
    meme-content.appendChild(meme);
})


    function memes(imgs, top, bot){
    let inputs = document.getElementById("initial-form").elements;
    let top = inputs[1].value;
    let bot = inputs[2].value;
    let imgs = inputs[0].value;
    
    let meme = document.createElement("div");
    let topTx = document.createElement("div");
    let botTx = document.createElement("div");
    let img = document.createElement('img');
    
    let img.src = imgs;
    let topTx.innerText = top;
    let botTx.innerText = bot;
    
    meme.append(topTx);
    meme.append(img);
    meme.append(botTx);
    
    return meme
    }


