function modeOne(){
    const facil = document.querySelectorAll(".noeasy");
    facil[0].style.visibility = "hidden";
    facil[1].style.visibility = "hidden";
    facil[2].style.visibility = "hidden";
    newColors();
}
function modeTwo(){
    newColors();
    const dificil = document.getElementsByClassName("noeasy");
    dificil[0].style.visibility = "visible";
    dificil[1].style.visibility = "visible";
    dificil[2].style.visibility = "visible";
}
var win = 0;
var rgb = "";
const colors = document.getElementsByClassName("square");
const visu = document.getElementsByClassName("noeasy");

function newColors(){
    //RESET
    document.querySelector(".header").style.backgroundColor = "dodgerblue";
    document.querySelector("#messager").innerHTML = "";
    if(visu[0].style.visibility == "hidden" 
    && visu[1].style.visibility == "hidden" 
    && visu[2].style.visibility == "hidden"){
        for(let i = 0; i < 3; i++){
            colors[i].style.visibility = "visible";
        }
    }

    for(let i = 0; i < 6; i++){ //COLOR GEN
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        colors[i].style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
    }
    
    if(visu[0].style.visibility == "hidden" 
    && visu[1].style.visibility == "hidden" 
    && visu[2].style.visibility == "hidden"){ // MODO EASY
        const correct = colors[Math.floor(Math.random() * 3)];
        document.getElementById("RGB").innerHTML = correct.style.backgroundColor;
        console.log("Correct: " + correct.innerHTML);
        win =  correct.id;
        rgb = correct.style.backgroundColor;
        
    }else{ // MODO HARD
        if(visu[0].style.visibility == "hidden"){ // RESET
            for(let i = 0; i < 6; i++){
                colors[i].style.visibility = "visible";
            }
        }
        const correct = colors[Math.floor(Math.random() * 6)];
        document.getElementById("RGB").innerHTML = correct.style.backgroundColor;
        win =  correct.id;
        rgb = correct.style.backgroundColor;
        console.log(correct.style.backgroundColor)
    }
}
// TO DO: Validation show status 

function validation(Num){
    const square = document.querySelectorAll(".square");
    console.log("Numero da sorte: "+Number(win));
    // console.log(rgb);
    console.log("Id: "+ square[Num].id);
    //CASE LOST
    if((Number(square[Num].id)) != Number(win) && rgb != colors[0].style.backgroundColor
    && colors[1].style.backgroundColor && colors[2].style.backgroundColor
    && colors[3].style.backgroundColor && colors[4].style.backgroundColor 
    && colors[5].style.backgroundColor)
    {
        square[Num].style.visibility = "hidden";
        document.querySelector("#messager").innerHTML = "TRY AGAIN"
    }else //CASE WIN
    {
        document.querySelector("#messager").innerHTML = "CORRECT";
        document.querySelector(".header").style.backgroundColor = rgb;
        if(visu[0].style.visibility == "hidden" 
        && visu[1].style.visibility == "hidden" 
        && visu[2].style.visibility == "hidden"){
            for(let i = 0; i < 3; i++){
                colors[i].style.visibility = "visible";
                colors[i].style.backgroundColor = rgb;
            }
        }
        else{
            for(let i = 0; i < 6; i++){
                colors[i].style.visibility = "visible";
                colors[i].style.backgroundColor = rgb;
            }
        }
    }
    

}