let page = 0;
const facit = { 0:["hund1.webp", "afghan hund", "Terrier x", "Pudel", "Labrador"], 
                1:["hund2.webp", "afghan hund", "Terrier", "Pudel x", "Labrador"],
                2:["hund3.webp", "afghan hund x", "Terrier", "Pudel", "Labrador"],
                3:["hund4.webp", "afghan hund", "Terrier", "Pudel x", "Labrador"],
                4:["hund5.webp", "afghan hund", "Terrier", "Pudel", "Labrador x"]
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
        btn_list[choice].style.backgroundColor = "aqua";
        guess[page] = choice
        if(status_list[page].style.backgroundColor != "green"){
            status_list[page].style.backgroundColor = "aqua";
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