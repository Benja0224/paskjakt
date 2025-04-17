let page = 0;
const facit = { 0:["hund6.webp", "Beauceron", "Border collie", "Mudi", "Shetland sheepdog"], 
                1:["hund2.webp", "Bullmastiff", "Dobermann", "Boxer", "Pinscher"],
                2:["hund3.webp", "Chow chow", "Pommeranian", "Samojed", "Japansk spets"],
                3:["hund4.webp", "Wachtelhund", "Cocker spaniel", "Golden retriever", "Labrador retriever"],
                4:["hund5.webp", "Papillon", "Malteser", "Bolognese", "Bichon havanais"]
            };
let guess = [-1,-1,-1,-1,-1];
const right_guess = [1,2,0,2,3];

window.addEventListener('load', (e) =>{
    set_page();
})

function swipe(dir){
    if(dir == "right"){
        if(page < 4){
            page++;
            set_page();
        }
    }else if(dir == "left"){
        if(page > 0){
            page--;
            set_page();
        }
    }
    if(page == 0){
        disable("left")
    }else if(page == 4){
        disable("right")
    }
}

function disable(dir){
    
}

function set_page(){
    let status_list = document.getElementById('status').children;
    for(let i = 0; i < status_list.length; i++){
        status_list[i].style.borderWidth = "1px";
    };
    status_list[page].style.borderWidth = "3px";

    img = document.getElementById("dog-img");
    img.src = "img/" + facit[page][0];

    const btn_list = document.getElementsByClassName('answer-btn');
    for (var i = 0; i < btn_list.length; i++) {
        btn_list[i].innerHTML = facit[page][i+1];
    }

    toggleAnswer(guess[page])
}

function toggleAnswer(choice){
    let btn_list = document.getElementsByClassName('answer-btn');
    let status_list = document.getElementById('status').children;
    for (var i = 0; i < btn_list.length; i++) {
        console.log(btn_list[i]);
        btn_list[i].style.backgroundColor = "white";
    };
    if(choice != -1){
        btn_list[choice].style.backgroundColor = "LightSkyBlue";
        guess[page] = choice
        if(status_list[page].style.backgroundColor != "green"){
            status_list[page].style.backgroundColor = "LightSkyBlue";
        };
    };
}

function check_answer(){
    let status_list = document.getElementById('status').children;
    let result = [false, false, false, false, false];
    
    for(let i = 0; i < guess.length; i++){
        if(guess[i] == right_guess[i]){
            result[i] = true;
            status_list[i].style.backgroundColor = "green";
        }else{
            status_list[i].style.backgroundColor = "red";
        };
    };

    if(result.every(Boolean)){
        document.getElementById('foo').style.display="block"
    }else{
        console.log(result);
    };
}